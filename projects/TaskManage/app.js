const express = require('express');
const app = express();
const { router } = require("./routes/tasks.js");
const connectDB = require("./db/connect.js"); // DB CONNECTION

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/v1/tasks", router);

const PORT = 8000;

// creates a promise
const start = async () => {
  try {
    await connectDB(); // await for promise to be resolved before start finishes
    console.log('connected to DB...');
    app.listen(PORT, () => { console.log(`server listening on port ${PORT}...`); })

  } catch (err) {
    console.log(err);
  }
}

start();
