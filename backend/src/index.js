const express = require('express');
const cors = require('cors');
const accountsRouter = require('./routes/routes');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/api', accountsRouter);

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
