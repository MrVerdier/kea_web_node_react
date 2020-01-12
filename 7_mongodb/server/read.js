const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'dogs';
const collectionName = "breeds"

MongoClient.connect(url, (err , client) => {
    const db = client.db(dbName)

    const breedsCollection = db.collection(collectionName)

    // db.breeds.find()
    breedsCollection.find().toArray((error, breeds) => {
        console.log(breeds)
    }) 

    client.close()
})