const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.SUPABASE_DB_URL,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;