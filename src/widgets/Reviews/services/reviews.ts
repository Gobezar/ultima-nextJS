import { unstable_cache } from "next/cache";
import { pool } from "@/shared/lib/db";

// Функция прямого запроса к БД (без кэша)
const fetchReviewsFromDb = async () => {
  const client = await pool.connect();
  try {
    // ВАЖНО: Убедись, что имена полей совпадают с твоей БД (id, author, rating, text, created_at)
    const result = await client.query(
      'SELECT * FROM reviews ORDER BY created_at DESC LIMIT 20'
    );
    return result.rows;
  } catch (error) {
    console.error("Database Error:", error);
    return []; // Возвращаем пустой массив в случае ошибки, чтобы сайт не упал
  } finally {
    client.release(); // Обязательно освобождаем клиент
  }
};

// Обертка с кэшированием
export const getCachedReviews = unstable_cache(
  async () => {
    return await fetchReviewsFromDb();
  },
  ['reviews-cache-key'], // Уникальный ключ кэша
  {
    revalidate: 3600, // Автоматически обновлять раз в 1 час (3600 секунд)
    tags: ['reviews'], // Тэг для принудительного обновления (используем его при POST запросе)
  }
);