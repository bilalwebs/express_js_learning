// const express = require("express");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("<h1>Node.js Example</h1>");
// });

// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });

// !
// const express = require("express");
// const app = require("express")();
// console.log(app);

// !

// const express = require("express"); //vaniall js

// import express from "express"; //ES script
// import home, { contact } from "./pages/home.js";
// import { about } from "./pages/about.js";
// const app = express();

// app.get("", (req, res) => {
//   //   res.send("<h1>Hello word</h1>");
//   res.send(home());
// });

// app.get("/about", (req, res) => {
//   res.send(about());
// });

// app.get("/contact", (req, res) => {
//   res.send(contact());
// });

// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });

// !

// import express from "express"; //ES script
// import { login } from "./pages/login.js";
// import home from "./pages/home.js";
// import { submit } from "./pages/submit.js";
// const app = express();

// app.get("/", (req, res) => {
//   res.send(home());
// });
// app.get("/login", (req, res) => {
//   res.send(login());
// });
// app.post("/submit", (req, res) => {
//   res.send(submit());
// });

// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });

// !

// import express from "express";
// import path from "path";
// const app = express();

// app.get("/", (req, resp) => {
//   const abspath = path.resolve("/view/home.html");
//   console.log(abspath);
//   resp.sendFile(abspath);
// });

// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });

// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// const app = express();

// // __dirname fix for ES module
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const abspath = path.resolve(__dirname, "view", "home.html");

// app.get("/", (req, res) => {
//   console.log(abspath);

//   res.sendFile(abspath + "home.html");
// });
// app.get("/about", (req, res) => {
//   const abspath = path.resolve(__dirname, "view", "about.html");

//   console.log(abspath);

//   res.sendFile(abspath);
// });
// app.use((req, res) => {
//   const abspath = path.resolve(__dirname, "view", "404.html");

//   console.log(abspath);

//   res.status(404).sendFile(abspath);
// });

// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });



import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const viewPath = path.join(__dirname, "view");
const publicPath = path.resolve('public')

app.use(express.static(publicPath))
console.log(publicPath);
app.get("/", (req, res) => {
  res.sendFile(path.join(viewPath, "home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(viewPath, "about.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(viewPath, "404.html"));
});

app.listen(3200, () => {
  console.log("Server is running on http://localhost:3200");
});
