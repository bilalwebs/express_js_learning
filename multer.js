import express from "express";
import multer from "multer";

const app = express();

// Custom storage
const storage = multer.diskStorage({
  // File kis folder me save hogi
  destination: function (req, file, cb) {
    cb(null, "upload");
  },

  // File ka naam kya hoga
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Simple storage
// const upload = multer({ dest: "upload" });

// Custom storage use karna
const upload = multer({ storage: storage });

app.get("/", (req, resp) => {
  resp.send(`
        <form action="/upload" method="POST" enctype="multipart/form-data">

        <input type="file" name="file">
        <br><br>

        <button type="submit">Upload File</button>

    </form>
        `);
});

app.post("/upload", upload.single("file"), (req, resp) => {
  resp.send({
    message: "file upload",
    info: req.file,
  });
});

app.listen(3200, () => {
  console.log("Server running on port 3200");
});
