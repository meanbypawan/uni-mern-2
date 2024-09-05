/*
  Write Operation
  a.writeFile() :- asynchonrous/non-blocking
  b.writeFileSync() :- synchronous/blocking

  Read Operation
  a.readFile() :- asynchronous/non-blocking
  b.readFileSync() :- synchronous/blocking
  */
import fs from "fs";
console.log("At the start...");
fs.writeFile("data.txt","NodeJs is suitable for IO Appl.",(err)=>{
    err ? console.log(err) : console.log("Operation success");
});
console.log("At the end..");







