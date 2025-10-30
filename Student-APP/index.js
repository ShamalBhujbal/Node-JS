import express, { response } from 'express';
import { registerStude ,updateStudent } from './src/Controller/studeController.js';
import { connectDB } from './src/Configs/ConnectDB.js';
import { adminLogin, registerAdmin } from './src/Controller/adminController.js';
//import { updateStudent } from './src/Controller/studeController.js';
const app = express();
app.use(express.json());

app.get("/",(request,response)=>{
    response.send("Hello Welcome to student app");
});
app.post("/student",registerStude);
app.put("/student/:id",updateStudent);
app.post("/admin",registerAdmin);
app.post("/admin/login",adminLogin);
app.listen(4300,async()=>{
    console.log("Server started !!");
    await connectDB();

})