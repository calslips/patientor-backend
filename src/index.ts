import express from 'express';
import cors from 'cors';
import diagnosesRouter from './routes/diagnoses';

const app = express();

const allowedOrigins = ['http://localhost:3000'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));
app.use(express.json());

app.get('/api/ping', (_req, res) => {
  console.log('ping in action');
  res.send('pong');
});

app.use('/api/diagnoses', diagnosesRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});