const client = require('../config/dbClient');

const createPost = async (imageUrl, text) => {
  const query = 'INSERT INTO posts (image_url, text) VALUES ($1, $2) RETURNING *';
  const values = [imageUrl, text];

  try {
    const res = await client.query(query, values);
    return res.rows[0];
  } catch (err) {
    console.error('Error executing query', err.stack);
    throw err;
  }
};

module.exports = {
  createPost,
};
