import { getConnectionObject } from "../configs/dbconfig.js";
export async function registerStudent(request,response){
         try{
            const data = request.body;
            const conn = getConnectionObject();
            const query =`Insert into stud_info values(${data.stud_Id}, '${data.stud_Name}','${data.stud_Age}','${data.stud_Marks}','${data.stud_Addr}')`;
            const[resultSet]=await conn.query(query);
            if(resultSet.affectedRows === 1){
                response.status(200).send({message:"Data inserted successfully"});
            }
            else{
                 response.status(400).send({message:"Not registred student"});
            }
    }catch(error){
        console.log(error);
        if(error.errno === 1062){
            response.status(400).send({message:"Student with this roll no already exits !"});
        }else
        {
          response.status(500).send({message:"Something went wrong!!"});
        }
        
    }
}
