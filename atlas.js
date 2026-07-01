// atlas.js
import {MongoClient} from "mongodb";

const url =
  "mongodb+srv://bilaldevelopment001_db_user:BilalTest@cluster0.ivao0hw.mongodb.net/?appName=Cluster0";

const database = "college";
const collection = "student";
const client = new MongoClient(url);

client.connect().then(() => {
  console.log("Connected to MongoDB");
});

async function dbConnection() {
  const db = client.db(database);
  const collectResult = db.collection(collection);
  const res = await collectResult.find().toArray();
  console.log(res);
}
dbConnection();
