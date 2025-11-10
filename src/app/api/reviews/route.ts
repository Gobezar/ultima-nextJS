// src/app/api/reviews/route.ts
import { NextResponse } from "next/server";

import knex from "../../../../backend/db/knex";

// Эта функция будет автоматически запускаться для инициализации таблицы
async function setupTable() {
  const exists = await knex.schema.hasTable("reviews");
  if (!exists) {
    await knex.schema.createTable("reviews", (table) => {
      table.increments("id").primary();
      table.string("author").notNullable();
      table.integer("rating").notNullable();
      table.text("text").notNullable();
      table.text("media");
      table.timestamp("created_at").defaultTo(knex.fn.now());
    });
    console.log("Таблица reviews создана");
  }
}

// Обработчик GET-запросов (вместо if (req.method === 'GET'))
export async function GET(request: Request) {
  try {
    await setupTable(); // Проверяем/создаем таблицу
    const reviews = await knex("reviews")
      .select("*")
      .orderBy("created_at", "desc");
    const formattedReviews = reviews.map((r) => ({
      ...r,
      media:
        typeof r.media === "string"
          ? JSON.parse(r.media || "[]")
          : r.media || [],
    }));
    return NextResponse.json(formattedReviews, { status: 200 });
  } catch (error: any) {
    console.error("Ошибка GET /api/reviews:", error);
    return NextResponse.json(
      { error: "Ошибка получения отзывов", details: error.message },
      { status: 500 }
    );
  }
}

// Обработчик POST-запросов (вместо if (req.method === 'POST'))
// src/app/api/reviews/route.ts POST
export async function POST(request: Request) {
  try {
    await setupTable();
    const body = await request.json(); 
    const { author, rating, text, media } = body;

    if (!author || !rating || !text) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // 1. Выполняем вставку и получаем результат (который может быть [id] или [{ id: id }])
    const result = await knex('reviews').insert({
      author,
      rating,
      text,
      media: JSON.stringify(media || []),
    }).returning('id'); // 'returning' нужен для Postgres

    // 2. Надежно извлекаем ID из результата (переменная 'id' здесь объявляется впервые!)
    const id = Array.isArray(result) 
      ? (result[0]?.id || result[0]) 
      : result;
    
    if (!id) {
        // Добавлено для лучшей отладки
        console.error("Knex insert failed to return an ID:", result);
        return NextResponse.json({ error: "Ошибка создания отзыва", details: "Не удалось получить ID созданной записи" }, { status: 500 });
    }

    // 3. Получаем всю созданную запись по ID
    const created = await knex('reviews').where({ id }).first();
      
    if (!created) {
        return NextResponse.json({ error: "Ошибка создания отзыва", details: "Запись не найдена после вставки" }, { status: 500 });
    }
      
    // 4. Форматируем и отправляем
    const formattedCreated = { ...created, media: JSON.parse(created.media || '[]') };
    
    return NextResponse.json(formattedCreated, { status: 201 });

  } catch (error: any) {
    console.error('Ошибка POST /api/reviews:', error);
    return NextResponse.json({ error: 'Ошибка создания отзыва', details: error.message }, { status: 500 });
  }
}