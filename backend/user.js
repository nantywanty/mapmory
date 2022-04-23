const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

async function getUser(_, { userId }) {
  const db = getDb();
  const result = await db.collection('users').findOne({id: userId});
  return result;
}

async function addUser(_, { user }) {
  const db = getDb();
  const result = await db.collection('users').insert(user);
  return result;
}

async function setUser(_, { user }) {
  const db = getDb();
  // console.log(user);
  const result = await db.collection('users').replaceOne(
    {id: user.id},
    user
  );
  return result;
}

module.exports = { getUser, addUser, setUser};