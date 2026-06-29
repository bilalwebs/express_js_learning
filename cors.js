// cors.js
import express from "express";
import cors from "cors";

const app = express();

// CORS middleware
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    name: "Bilal Hussain",
    age: 44,
    email: "bilal@gmail.com",
  });
});

app.listen(3200, () => {
  console.log("Server running on port 3200");
});
