import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'
import './src/middleware/databaseConnection'
import userRouter from './src/routes/users'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

let corsOptions = { origin: "http://localhost:3000/" };
app.use(cors(corsOptions));

app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use('/api', userRouter);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});