import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`);
});
