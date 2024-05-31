const express = require('express');
const app = express();
const { router } = require("./routes/tasks.js");

// MIDDLEWARE

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/api/v1/tasks", router);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}...`);
})