import { createConnection } from "mysql2/promise";
let conn=null;
export async  function connectDB(){
    try{
         conn = await createConnection({
            host:'localhost',
            user:'root',
            password:'cdac',
            port:3306,
            database:'Node'
         });

    }catch(error){
        console.log("Error in Database Connection !!");
        console.log(error);
    }
   return conn;
};

export  async function getConnectionObject(){
    return conn;
}