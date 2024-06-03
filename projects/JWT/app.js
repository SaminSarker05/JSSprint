const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use(express.static('./public'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}...`)
})