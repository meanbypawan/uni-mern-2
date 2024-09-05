import fs from "fs";
try{
 fs.appendFileSync("abc.txt","\n NodeJs is written in c++");
 console.log("Operation success...");
}
catch(err){
    console.log(err);
} 