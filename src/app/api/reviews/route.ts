import { NextResponse } from "next/server";
import { pool } from "@/shared/lib/db";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  let client;

  try {
    const body = await request.json();
    const { author, rating, text, media, phone } = body;

    // 2. Валидация данных
    if (!author || !rating || !text) {
      return NextResponse.json(
        { error: "Заполните обязательные поля" },
        { status: 400 }
      );
    }

    // 3. Подключение к БД
    client = await pool.connect();

    // 4. Выполнение запроса
    const query = `
  INSERT INTO reviews (author, rating, text, phone, media, created_at)
  VALUES ($1, $2, $3, $4, $5, NOW())
  RETURNING id
`;
    const values = [author, rating, text, phone, JSON.stringify(media || [])];

    await client.query(query, values);

    // 5. Сброс кэша
    revalidateTag("reviews");

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    // 6. Обработка ошибок (включая ошибки подключения или SQL)
    console.error("API Error:", error);

    // Если ошибка произошла из-за SQL или другого сбоя, возвращаем 500 и сообщение
    const errorMessage = error.message.includes("column")
      ? "Ошибка базы данных (проверьте схему таблицы)"
      : "Внутренняя ошибка сервера";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  } finally {
    // 7. ОБЯЗАТЕЛЬНО: освобождаем клиента, если он был успешно подключен
    if (client) {
      client.release();
    }
  }
}
