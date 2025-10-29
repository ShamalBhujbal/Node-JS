import express, { request, response } from 'express';
import {connectDB} from './src/configs/dbconfig.js';
import {registerStudent} from './src/controller/studentController.js';
const app =express();
app.use(express.json());


app.get("/",(request,response)=>{
    response.send({message:"Welcome to student"});
});
app.post("/students",registerStudent);
app.listen(7800,async()=>{
    await connectDB();
});