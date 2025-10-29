import express, { response } from 'express';
import { registerStude } from './src/Controller/studeController.js';
import { connectDB } from './src/Configs/ConnectDB.js';

const app = express();
app.use(express.json());

app.get("/",(request,response)=>{
    response.send("Hello Welcome to student app");
});
app.post("/student",registerStude);

app.listen(4300,async()=>{
    console.log("Server started !!");
    await connectDB();

})