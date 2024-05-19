const express = require('express');
const path = require('path');
const app = express();

// app.use sets up middleware and static files byself
app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'index.html'));
  // can also serve html page in static dir
})

app.all('*', (req, res) => {
  res.status(404).send('404 error');
})

app.listen(8000, () => {
  console.log('express listening on port 8000...');
})
