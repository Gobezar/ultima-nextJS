const express = require('express');
const cors = require('cors');
const knex = require('./db/knex');

const app = express();
app.use(cors());
app.use(express.json());

// создаём таблицу при первом запуске
(async () => {
  const exists = await knex.schema.hasTable('reviews');
  if (!exists) {
    await knex.schema.createTable('reviews', table => {
      table.increments('id').primary();
      table.string('author').notNullable();
      table.integer('rating').notNullable();
      table.text('text').notNullable();
      table.text('media');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    });
    console.log('Таблица reviews создана');
  }
})();

// получить список отзывов
app.get('/reviews', async (req, res) => {
  const reviews = await knex('reviews').select('*').orderBy('created_at', 'desc');
  res.json(reviews.map(r => ({ ...r, media: r.media ? JSON.parse(r.media) : [] })));
});

// добавить отзыв
app.post('/reviews', async (req, res) => {
  const { author, rating, text, media } = req.body;
  if (!author || !rating || !text) return res.status(400).json({ error: 'Missing fields' });

  const [id] = await knex('reviews').insert({
    author,
    rating,
    text,
    media: JSON.stringify(media || []),
  });

  const created = await knex('reviews').where({ id }).first();
  res.status(201).json({ ...created, media: JSON.parse(created.media || '[]') });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
