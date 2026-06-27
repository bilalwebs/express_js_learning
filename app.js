// app.js --> mongodb

import express from "express";
import { MongoClient, ObjectId } from "mongodb";

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
app.use(express.json());
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
    resp.render("add-student");
  });

  app.post("/add-student", async (req, resp) => {
    console.log(req.body);

    const collection = db.collection("students");

    const result = await collection.insertOne(req.body);

    resp.send(result);
  });

  app.post("/add-student-api", async (req, resp) => {
    console.log(req.body);

    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      resp.send({ message: "operation fail", success: false });
      return false;
    }
    const collection = db.collection("students");

    const result = await collection.insertOne(req.body);
    resp.send({ message: "data stored", success: true, result: result });
  });

  app.get("/ui/delete/:id", async (req, resp) => {
    const id = req.params.id;

    const collection = db.collection("students");

    const result = await collection.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount > 0) {
      return resp.redirect("/ui");
    }

    resp.send("Student not found!");
  });

  app.get("/ui/student/:id", async (req, resp) => {
    const id = req.params.id;
    console.log(id);
    const collection = db.collection("students");
    const result = await collection.findOne({ _id: new ObjectId(id) });
    resp.render("update-student", { result });
  });

  app.get("/student/:id", async (req, resp) => {
    const id = req.params.id;
    console.log(id);
    const collection = db.collection("students");
    const result = await collection.findOne({ _id: new ObjectId(id) });
    resp.send({
      message: "data fetch",
      success: true,
      result: result,
    });
  });

  app.put("/update/:id", async (req, resp) => {
    console.log(req.body);
    console.log(req.params.id);

    const collection = await db.collection("students");
    const filter = { _id: new ObjectId(req.params.id) };
    const update = {
      $set: req.body,
    };
    const result = await collection.updateOne(filter, update);

    if (result.modifiedCount > 0) {
      resp.send({
        message: "data Succesffuly",
        success: true,
        result: result,
      });
    } else {
      resp.send({
        message: "data not update",
        success: false,
        result: result,
      });
    }
  });
});

app.listen(3200);
