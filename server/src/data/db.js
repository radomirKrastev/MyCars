const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;
const mongodbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

let db;

const initDb = async (connectionString) => {
    let client = await MongoClient.connect(connectionString, mongodbOptions)
    
    db = client.db();
    
    return db;
};

const getDb = () => {
    if (!db) {
        throw Error('Database not initialized!');
    }

    return db;
};

exports.initDb = initDb;
exports.getDb = getDb;
exports.ObjectID = mongodb.ObjectID;
