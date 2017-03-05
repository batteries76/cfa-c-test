console.log("Your chicken is ready")

const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://localhost:27017/test', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(3500, () => {
    console.log('listening on 3500')
  })
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
  console.log(__dirname);

  db.collection('language_tree').find().toArray(function(err, results) {
    console.log(results)
    // send HTML file populated with quotes here
  })
  // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})
