import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(bodyParser.json());

const port = process.env.PORT || 4444;

app.listen(port, () => {
  console.log(`the application is running ont the port ${port}`);
});

export default app;
