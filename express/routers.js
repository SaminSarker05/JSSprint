const express = require('express');
const app = express();
const { router } = require('./routes/people');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/people', router);

app.listen(8000, () => {
  console.log('listening on port 8000');
})