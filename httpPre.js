const http=require('http');
const server=http.createServer((request,response)=>{
    //callback function handles request and response from server
    //when server get request then callback function will accept request and then generte response
    response.write("Hello World !!"); //on browser we can get response
    response.end();//after ending response will send to client/browser
});
//it will create server and written its instance.
//server.listen(4500);//mention port number inside listen //server will start here
//without port number serever cant start it will terminate automatically

server.listen(4500,()=>{
    //operations that we want to perform at the time of server started then we use this callback function
    //start listen callback function first
    //then start createserver wala callback function
    console.log("server started !!");
});