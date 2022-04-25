// require('dotenv').config();
const { MongoClient } = require('mongodb');

let db;

async function connectToDb() {
  // const url = process.env.DB_URL
  const url = "mongodb+srv://nantywanty:RUdAqHWOwmVMvFG2@cluster0.hmcdy.mongodb.net/mapmory?retryWrites=true&w=majority";
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  console.log('Connected to MongoDB at', url);
  db = client.db();
}

function getDb() {
  return db;
}

module.exports = { connectToDb, getDb };