import fs from "fs";
fs.readFile("data.txt","utf8",(err,data)=>{
   err ? console.log(err) : console.log(data);
});