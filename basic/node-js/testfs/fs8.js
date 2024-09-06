import fs, { createReadStream, createWriteStream } from "fs";

const writeStream = createWriteStream("xyz.txt");

writeStream.write("It is write stream demo...");
writeStream.end();

writeStream.on("finish",()=>{
    console.log("Operation success....");
});
writeStream.on("error",(err)=>{
    console.log(err);
});