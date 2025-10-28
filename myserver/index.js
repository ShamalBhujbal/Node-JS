import {createServer} from 'http';
const server=createServer((request,response)=>{
    response.write("Hello World !!");
    response.write("Welcome to the app");
    response.write("shamal");
    response.end();
});
server.listen(4000,()=>{
     console.log("Server started !!")
});