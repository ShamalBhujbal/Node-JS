import { compareSync, hash, hashSync } from "bcrypt";
import { getConnectionObject } from "../Configs/ConnectDB.js";
import jwt from "jsonwebtoken";
export async function registerAdmin(request, response) {
  try {
    const conn = await getConnectionObject();
    const {id,name,phone_no,password,email} = request.body;
    const encryptedPassword = hashSync(password,12); //12 rounds passowrd string will be shuffle here
    const qry = `INSERT INTO admin VALUES(${id},'${name}','${phone_no}','${encryptedPassword}','${email}')`;
    //const query =`Insert into admin values(${id},'${name}','${phone_no}','${password}','${email})'`;
 //   const query = `INSERT INTO admin (id, name, phone,password,email) VALUES (?, ?, ?,?,?)`;
    const [result] = await conn.query(qry);
    if (result.affectedRows === 1) {
      response.status(200).send({ message: "Admin Register successfully" });
    } else {
      response.status(500).send({ message: "Admin Registration Failed" });
    }
  } catch (error) {
    console.log(error);
    if (error.errno === 1062) {
      response.status(400).send({ message: 'Admin with this id already Registered' });
    } else {
      response.status(500).send({ message: "Something went Wrong !!" });
    }
  }
}
export async function adminLogin(request,response) {
  try{
    const conn = await getConnectionObject();
    const {phone_no,password} = request.body;
    //const query = `select * from admin where phone_no='${phone_no}'`;
    //const[rows] = await conn.query(query);
    const qry = `SELECT * FROM admin WHERE phone_no='${phone_no}'`;
    const [rows] = await conn.query(qry);
    if(rows.length === 0){
      response.status(400).send({message:"Login failed,Phone doesnt exist"});
    }else{
      if(compareSync(password,rows[0].password)){
        const token = jwt.sign({adminId:rows[0].id},'hello123'); 
        response.status(200).send({token,message:"Login successfull"});
      }else{
        response.status(400).send({message:"Login failed,password is invalid"});
      }
    }
  }catch(error){
     console.log(error);
     response.status(500).send({message:"Something went Wrong"});
  }
}