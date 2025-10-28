import express, { request, response } from "express";
import{createConnection} from 'mysql2/promise'; //
const app=express();
let conn;
async function connectDb(){
    try {
       conn =  await createConnection({
    host:'localhost',
    user:'root',
    password:'cdac',
    port:3306,
    database:'Employee_Details'
});
 console.log("DB connected");
 //console.log(conn);
    }catch(error){
        console.log("Error in Db");
        console.log(error);
    }
}

app.get("/",(request,response)=>{
    response.send({message:"Welcome to employee crud"});

});

//crud operations 
app.get('/emp',async(request,response)=>{
    try{
       //here fetching data from DB
      const [rows] = await conn.query("SELECT * from emp");
      console.log(rows);
      response.status(200).send(rows);
    }catch(error){
      response.status(500).send({message:"Something Went Wrong"});
    }
}) ;
app.get("/emp/:emp_id",async(request,response)=>{
        try{
            const[rows] = await conn.query("select * from emp where emp_id = ?",request.params.emp_id);
            response.send(rows);
            if(rows.length === 0){
                response.status(404).send({message:"employee not found with given id"})
            }
            else{
             response.status(200).send(rows[0]);
            }


        }catch(error){
           response.status(500).send({message:"Something went wrong!"});
        }
});
app.delete("/emp/:emp_id",async(request,response)=>{
        try{
            const[deleteR] = await conn.query("Delete from emp where emp_id ="+request.params.emp_id);
            response.send(deleteR.affectedRows);
            if(deleteR.affectedRows === 0){
                response.status(400).send({message:"Employee not found with given id"+request.params.emp_id});
            }else{
               response.status(200).send({message:"employee deleted"});
                //response.status(200).send(rows[0]);
            }
             response.status(200).send("Hello");  
        
        }catch(error){
           response.status(500).send({message:"Something went wrong!"});
        }
});

app.listen(5700,async()=>{
    await connectDb();
});