// app.js --> mongodb

import express from "express";
import { MongoClient } from "mongodb";

const dbName = "school";
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

// async function dbConnection(params) {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("students");

//   const res = await collection.find().toArray();
//   console.log(res);
// }

// dbConnection();

// !!
// const app = express();

// app.set("view engine", "ejs");
// app.get("/", async (req, resp) => {
//   await client.connect();
//   const db = client.db(dbName);
//   const collection = db.collection("students");

//   const std_res = await collection.find().toArray();
//   console.log(std_res);

//   //   resp.send("data will be proved");
//   resp.render("students",{std_res});
// });

// app.listen(3200);

// !!

const app = express();
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
client.connect().then((connection) => {
  const db = connection.db(dbName);

  app.get("/api", async (req, resp) => {
    const collection = db.collection("students");
    const res = await collection.find().toArray();
    console.log(res);
    resp.send(res);
  });

  app.get("/ui", async (req, resp) => {
    const collection = db.collection("students");
    const students = await collection.find().toArray();
    // console.log(students);
    resp.render("students", { students });
  });

  app.get("/add", async (req, resp) => {
    resp.send(`
        <form action="/add-student" method="post">
      <input type="text" placeholder="enter user name" name="name" />
      <br /><br />
      <input type="text" placeholder="enter email" name="email" />
      <br /><br />
      <input type="text" placeholder="enter age" name="age" />
      <br /><br />
      <button type="">Submit</button>
    </form>`);
  });

  app.post("/add-student", async (req, resp) => {
    console.log(req.body);

    const collection = db.collection("students");

    const result = await collection.insertOne(req.body);

    resp.send(result);
  });
});

app.listen(3200);
