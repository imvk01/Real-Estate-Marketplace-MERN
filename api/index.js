import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to the DB");
}
).catch((err)=>{
    console.log("Error");
})
const app=express();
app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.listen(3000,()=>{
    console.log("Server is running in port 3000");
}
);

app.use('/api/user',userRouter);
app.use('/api/auth',authRouter);

//middleware
app.use((err , req ,res, next) => {
    const codeStatus = err.codeStatus || 500 ;
    const message = err.message || "Internal Server Error";
    return res.status(codeStatus).json({
        success : false ,
        codeStatus,
        message,
    });
});