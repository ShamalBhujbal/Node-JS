import express, { response } from 'express';
const app = express();//it qill creaste express application
app.get("/",(request,response)=>{
    response.send("Welcome to home !!");
}); //  / means root base url
app.get("/login",(request,response)=>{
    response.send("welcome to login page!!");
});
app.get("/sum/:num1/:num2",(request,response)=>{
     const a = parseInt(request.params.num1);
     const b =parseInt(request.params.num2);
     const n3 = a+b;
     response.send("sum is :"+n3);
});
app.get("/profile",(request,response)=>{
    response.send("Welcome to my profile !!");
})
app.get("/factorial/:num",(request,response)=>{
    try{
          const value =parseInt(request.params.num);
          if(value <=0){
            response.status(400).send({message:'Invalid Number'})//here we sending output as in the json object
          }
          else{
            var f=1;
            for(var i=1;i<=value;i++){
                f=f*i;
            }
            response.status(200).send({factorial:f});
          }
    }catch(error){
         response.status(500).send({message:'Something went wrong!!'});
    }
});
app.listen(5500,()=>{
      console.log("server started !!");
});

