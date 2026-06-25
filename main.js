// main.js

// middleware
// import express from "express";

// const app = express();

// function checkOut(req, res, next) {
//   console.log("Request URL:", req.url);
//   next();
// }
// app.use(checkOut);
// app.get("/", (req, res) => {
//   res.send("home Page");
// });
// app.get("/user", (req, res) => {
//   res.send("User Page");
// });
// app.get("/product", (req, res) => {
//   res.send("Product Page");
// });

// app.listen(3200, () => {
//   console.log("Server is running on http://localhost:3200");
// });

// !

// !global router middlwware
// import express from "express";

// const app = express();

// function ageChecker(req, resp, next) {
//   if (!req.query.age || req.query.age < 18) {
//     resp.send("Alert! you cannot acvess");
//   } else {
//     next();
//   }
// }

// app.use(ageChecker);

// function ipCheck(req, res, next) {
//   const ip = req.ip;

//   console.log("User IP:", ip);

//   const blockedIp = "192.168.100.6";

//   if (ip.includes(blockedIp)) {
//     return res.send("Alert! You cannot access this page");
//   }

//   next();
// }

// app.use(ipCheck);

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/login", (req, res) => {
//   res.send("Login Page");
// });

// app.get("/admin", (req, res) => {
//   res.send("Admin Page");
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// !! selected route apply
// import express from "express";

// const app = express();

// function checkAgeRouteMiddleware(req, resp, next) {
//   if (!req.query.age || req.query.age < 18) {
//     resp.send("Alert Not website ");

//   } else {
//     next();
//   }
// }

// function checkAgeRouteMiddleware(req, res, next) {
//   if (!req.query.age || req.query.age < 18) {
//     return res.status(403).send("Access Denied: Age must be 18+");
//   }

//   next();
// }
// function log(req, resp, next) {
//   console.log("Request url: ", req.url);
//   next();
// }

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });
// app.get("/login", (req, res) => {
//   res.send("Login Page");
// });
// app.get("/user", log, checkAgeRouteMiddleware, (req, res) => {
//   res.send("User Page");
// });
// app.get("/product", (req, res) => {
//   res.send("Product Page");
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// ! built-in middleware
// import express from "express";
// import path from "path";

// const app = express();
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   const filePath = path.resolve("view/home.html");
//   res.sendFile(filePath);
// });

// app.get("/login", (req, res) => {
//   res.send(
//     `
//     <form action="/submit" method="post">
//       <input type="text" placeholder="enter email" name="email"/>
//       <input type="password" placeholder="ebter password" name="password"/>
//       <button>login</button>
//     </form>
//     `,
//   );
// });
// app.post("/submit", (req, res) => {
//   console.log("user login detail are: ", req.body);
//   res.send("submit Page");
// });
// app.get("/product", (req, res) => {
//   res.send("Product Page");
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// ! external middleware
// import express from "express";
// import morgan from "morgan";

// const app = express();
// app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("home page");
// });

// app.get("/login", (req, res) => {
//   res.send("login page");
// });

// app.post("/submit", (req, res) => {
//   res.send("submit Page");
// });

// app.get("/product", (req, res) => {
//   res.send("Product Page");
// });

// app.get("/wait", (req, res) => {
//   setTimeout(() => {
//     res.send("result after 1 second");
//   }, 1000);
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// !! error handling
// import express from "express";

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/login", (req, res) => {
//   res.send("Login Page");
// });

// app.get("/error", (req, res, next) => {
//   const error = new Error("Something went wrong");
//   error.status = 404;
//   next(error);
// });

// app.get("/product", (req, res) => {
//   res.send("Product Page");
// });

// // * error handling middleware
// function errorHandling(err, req, res, next) {
//   res.status(err.status || 500).send("Try again later");
// }

// app.use(errorHandling);

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// ! template engine
// import express from "express";

// const app = express();

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("home", {
//     name: "Bilal Hussain AI",
//     company: "Software House",
//   });
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// !!
// import express from "express";

// const app = express();

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: false }));

// app.get("/add-user", (req, res) => {
//   res.render("addUser");
// });

// app.post("/submit-user", (req, res) => {
//   console.log(req.body);
//   res.send({ message: "User Submitted", data: req.body });
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// !
// import express from "express";

// const app = express();

// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: false }));

// app.get("/add-user", (req, res) => {
//   res.render("addUser");
// });

// app.post("/submit-user", (req, res) => {
//   console.log(req.body);
//   res.send({ message: "User Submitted", data: req.body });
// });

// app.get("/user", (req, res) => {
//   res.render("user", {
//     user: ["Bilal", "Ali", "Ahmed", "Hamza"],
//   });
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// ! MVC Architecture Example with Node.js
// import express from "express";
// import { handleUser } from "./controller/userController.js";
// const app = express();

// app.set("view engine", "ejs");
// app.get("/users", handleUser);

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// ! Dynamic Routes with Example
// import express from "express";

// const app = express();
// app.get("/", (req, res) => {
//   const user = ["bilal", "akm", "nab"];

//   let data = `<ul>`;

//   for (let i = 0; i < user.length; i++) {
//     data += `<li><a href="/user/${user[i]}">${user[i]}</a></li>`;
//     console.log(user[i]);
//   }

//   data += `</ul>`;

//   console.log(data); // 👈 Add this
//   res.send(data);
// });

// app.get("/user/:name", (req, res) => {
//   res.send("This is " + req.params.name + "'s profile");
//   console.log(req.params);
// });

// app.listen(3200, () => {
//   console.log("Server running on http://localhost:3200");
// });

// !! API Example with Dynamic Routes
import express from "express";
import userData from "./user.json" with { type: "json" };
const app = express();
app.get("/", (req, res) => {
  console.log(userData);
  res.send(userData);
});

app.listen(3200, () => {
  console.log("Server running on http://localhost:3200");
});
