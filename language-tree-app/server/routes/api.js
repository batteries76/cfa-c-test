const express = require('express');
const router = express.Router();

// declare axios for making http requests
// const axios = require('axios');
// const API = 'https://jsonplaceholder.typicode.com';

const app = express();
const axios = require('axios');

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://batteries76:chewugin2@ds119020.mlab.com:19020/language-tree', (err, database) => {
  if (err) return console.log(err);
  db = database;
})

/* GET api listing. */
router.get('/', (req, res) => {
  console.log("in the api get at /");
  res.send('api works!!!');
});

// Get all posts
router.get('/country-info', (req, res) => {
  console.log("COUNTRY Info!");
  db.collection('country-info').find().toArray((err, results) => {
//    console.log(results);
    res.send(results);
  });
});

router.get('/language-json', (req, res) => {
  console.log("LANGUAGES!");
  db.collection('language-json').find().toArray((err, results) => {
//    console.log(results);
    res.send(results);
  });
});

router.get('/country-geo', (req, res) => {
  console.log("COUNTRY geo!");
  db.collection('country-geo').find().toArray((err, results) => {
//    console.log(results);
    res.send(results);
  });
});

module.exports = router;
