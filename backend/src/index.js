const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
