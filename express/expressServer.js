const express = require('express');

// making instance of express instance
const app = express();
app.get('/', (req, res) => { // callback function called everytime user makes request at /
  res.status(200).send('home');
})

app.get('/about', (req, res) => {
  res.status(200).send('about');
})

app.all('*', (req, res) => {
  res.status(404).send('404 error');
})

app.listen(8000, () => { // function called when function instantiated
  console.log('express server started on port 8000');
});