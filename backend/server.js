// require('dotenv').config({path:'./.env'});
const express = require('express');
const { connectToDb } = require('./db.js');
const { installHandler } = require('./api_handler.js');

const app = express();

installHandler(app);

// const port = process.env.API_SERVER_PORT;
const port = 8000;

(async function start() {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`API server started on port ${port}`);
    });
  } catch (err) {
    console.log('ERROR:', err);
  }
}());