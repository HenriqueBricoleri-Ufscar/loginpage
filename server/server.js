import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {testDatabaseConnection} from './database/db.js';

import routes from './routes.js';

dotenv.config();

const app = express();
const PORT = 3333;

//Global Middlewares
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());

//Routes
app.get('/test', (req, res) => {
    res.status(200).json({msg: 'Server listening'});
});

app.use('/user', routes);

const start = async () => {
    try {

        testDatabaseConnection();
        
        app.listen(PORT, () => {
            console.log(`Server running at PORT: ${PORT}`);
        })

    } catch (err) {
        console.error('Failed to start server!', err);
    }
}

start();