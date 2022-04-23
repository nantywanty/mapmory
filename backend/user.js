const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function getUser(_, { id }) {
  const db = getDb();
  const user = await db.collection('users').findOne({userId: id});
  return user;
}

async function getAll() {
    const db = getDb();
    const user = await db.collection('users').find({}).toArray();
    return user;
  }


module.exports = { getUser, getAll };