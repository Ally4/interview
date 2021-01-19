import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routers/users';

dotenv.config();

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(bodyParser.json());

app.use(router);

const port = process.env.PORT || 4444;

app.listen(port, () => {
    console.log(`the application is runnign on this port ${port}`);
});

export default app;
