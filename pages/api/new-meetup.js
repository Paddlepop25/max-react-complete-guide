// these code only run in server, never in client
// so can use credentials here
// these functions are triggered when requests are made to the api here

// like /api/new-meetup
// POST /api/new-meetup
import { MongoClient } from 'mongodb';

const mongodb_db = process.env.MONGODB_DB;
const mongodb_user = process.env.MONGODB_USER;
const mongodb_pw = process.env.MONGODB_PW;

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // console.log('data >>>', data); // logs in terminal not browser console

    const client = await MongoClient.connect(
      `mongodb+srv://${mongodb_user}:${mongodb_pw}@cluster0.mg1xb.mongodb.net/${mongodb_db}?retryWrites=true&w=majority`
    );
    const db = client.db();
    const meetupsCollection = db.collection(mongodb_db);

    const result = await meetupsCollection.insertOne(data);
    console.log('result >>> ', result); // logs in terminal not browser console

    client.close();

    // status 201 means something is inserted successfully
    res.status(201).json({ message: 'Meetup inserted!' });
  }
}

export default handler;
