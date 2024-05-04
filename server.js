const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

async function insertDocuments(collection, doc) {
  try {
    await client.connect();
    const result = await collection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

async function findDocuments(collection) {
  try {
    await client.connect();
    const cursor = collection.find({});
    const documents = await cursor.toArray();
    return documents;
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

app.post('/insert', async (req, res) => {
  const doc = req.body;
  const database = client.db("Test");
  const collection = database.collection("MoyeMoye");
  await insertDocuments(collection, doc);
  res.send('Data inserted successfully');
});

app.get('/display', async (req, res) => {
  const database = client.db("Test");
  const collection = database.collection("MoyeMoye");
  const documents = await findDocuments(collection);
  res.json(documents);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
