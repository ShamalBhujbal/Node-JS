import { getConnectionObject } from "../Configs/ConnectDB.js";



export async function registerStude(request,response){
    try
    {
      const conn = await getConnectionObject();
      const data=request.body;
     // const query =`Insert into student values(${data.id},'${data.name}','${data.marks}')`;
      const query = `INSERT INTO student (id, name, marks) VALUES (?, ?, ?)`; 
     const [result] = await conn.query(query,[data.id,data.name,data.marks]);
      if(result.affectedRows === 1){
        response.status(200).send({message:"Student Register successfully"});
      }else
      {
        response.status(500).send({message:"Student Registration Failed"});
      }
    }catch(error){
       console.log(error);
       if(error.errno === 1062){
        response.status(400).send({message:'Student with this id already Registered'});
       }else{
        response.status(500).send({message:"Something went Wrong !!"});
       }
    }
    
    
}