import express from 'express';
import mongoose from 'mongoose';
import { PORT } from './config.js';
import { MongoDBUrl } from './config.js';
// const {MongoDBUrl} = process.env;
import cors from 'cors'
import router from './Routes/RatingRoute.js';

// --------------------------------------------------------------------------------------->

const app = express();

app.use(cors());
app.use(express.json());
app.use("/feedbacks", router)

// --------------------------------------------------------------------------------------->

// MongoDB Connection

mongoose
    .connect(MongoDBUrl)
    .then(() => {
        console.log("App connected to database")
    })
    .catch((error) => {
        console.log(error)
    });
// --------------------------------------------------------------------------------------->


// Endpoint

app.get('/', (req,res) => {
    return res.status(200).send("Welcome to Portfolio Server")
})


// --------------------------------------------------------------------------------------->

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});