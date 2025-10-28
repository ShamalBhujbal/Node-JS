import express, { request, response } from 'express';
const app = express();
app.use(express.json());
app.get("/",(request,response)=>{
    response.send({message:"welcome to app"});

});
app.post("/sum",(request,response)=>{
    console.log(request.body);//gives data from the request body.
    const n1= request.body.a;
    console.log(n1);
    const n2 =request.body.b;
    console.log(n2);
    const n3 = n1+n2;
    console.log({sum:n3});
    response.send({message:"hello"});
    //by default express cant get request body data.
});

app.listen(4500);