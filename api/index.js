import express from 'express';
import mongoose from 'mongoose';
import  dotenv from 'dotenv';
import {UserRouter} from './routes/user.route.js';
import { authrouter } from './routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=> {
    console.log('connected to mongodb');
}).catch((err) => {
    console.log(err);
})

const app = express();
app.listen(3000, () => {
    console.log('server is running on port 3000');
});

app.get('/', (req,res)=>{
    res.json({
        message: 'Hello  World',
    });
});

app.use("/api/user", UserRouter);
app.use("/api/user", authrouter);