// mongooses.js
import mongoose from "mongoose";
import express from "express";
import studentModel from "./model/studentModel.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await mongoose.connect("mongodb://localhost:27017/school").then(() => {
  console.log("Connect");
});

app.get("/", async (req, resp) => {
  const studentData = await studentModel.find();

  resp.send(studentData);
});

app.post("/save", async (req, resp) => {
  console.log(req.body);
  const { name, age, email } = req.body;
  if (!name || !age || !email) {
    return resp.send({
      message: "data not found",
      success: false,
      storeInfo: null,
    });
  }
  const studentData = await studentModel.create(req.body);
  console.log(studentData);
  resp.send({ message: "data store", success: true, storeInfo: studentData });
});

app.put("/update/:id", async (req, resp) => {
  console.log(req.body);

  const id = req.params.id;
  console.log(id);

  const studentData = await studentModel.findByIdAndUpdate(id, {
    ...req.body,
  });
  console.log(studentData);
  resp.send({ message: "data udpate", success: true, storeInfo: null });
});
app.delete("/delete/:id", async (req, resp) => {
  console.log("Delete route hit");
  console.log(req.params.id);

  const studentData = await studentModel.findByIdAndDelete(req.params.id);

  resp.send({
    message: "Data deleted",
    success: true,
    storeInfo: studentData,
  });
});
app.listen(3200);

// async function dbConnection() {
//   await mongoose.connect("mongodb://localhost:27017/school");

//   const schema = new mongoose.Schema({
//     name: String,
//     email: String,
//     age: Number,
//   });

//   const StudentsModel = mongoose.model("students", schema);

//   const result = await StudentsModel.find();

//   console.log(result);
// }

// dbConnection();
