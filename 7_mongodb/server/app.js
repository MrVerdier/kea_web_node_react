const express = require('express')
const app = express()
const insertDocuments = require('./insertMany')

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Bodyparser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
 
// // Connection URL
// const url = 'mongodb://localhost:27017';
 
// // Database Name
// const dbName = 'database_test';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, function(err, client) {

//   assert.equal(null, err);

//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
  
//   insertDocuments(db, function() {
//     client.close();
//   });

// });


app.listen(8080, (error) => {
    if(error){
        console.log(error)
    }
})