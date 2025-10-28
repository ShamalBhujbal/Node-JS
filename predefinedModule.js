const fs=require('fs');
/*const { console } = require('inspector');
fs.writeFile("myfile.txt","this is my text file",()=>{
    //callback function
    console.log("Write operation Completed!!");
});//by default write operation is Asynchronus

console.log("After write in file");
fs.writeFileSync("myfile.txt","this is my second text");
console.log("Write sync dont need callback function !!");

//reading  a file
fs.readFile("myfile.txt",(error,data)=>{ 
    //read file always give data in bytes./buffered form data
    if(error){
          console.log(error);
    }
    else{
        console.log(data);
        console.log(data.toString()); //converting buffered data tostring

    }
});*/
console.log("After Reading Data");

const data = fs.readFileSync("myfile.txt");
console.log(data.toString());
console.log("After Reading Data in Sync");
