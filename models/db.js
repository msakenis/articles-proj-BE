const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://mindaugasTest:${process.env.MONGO_DB_PASS}@cluster0.2bz30.mongodb.net/${process.env.MONGO_DB_NAME}`;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to mongo server.');
});

db.on('error', (err) => {
  console.log('Could not connect to mongo server!');
  return console.log(err);
});

db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;
