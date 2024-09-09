import http from "http";
import fs from "fs";
import url, { fileURLToPath } from "url";
import path from "path";
const server = http.createServer((request,response)=>{
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname=  path.dirname(__filename);
  console.log(request.url);
  if(request.url == "/home" && request.method == "GET"){
    let filePath =  path.join(__dirname,"public/home.html");
    let data = fs.readFileSync(filePath);
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(data);
    response.end();
  }
  else if(request.url == "/about"){
     let filePath = path.join(__dirname,"public/about.html");
     let data = fs.readFileSync(filePath);
     response.writeHead(200,{"Content-Type":"text/html"});
     response.write(data);
     response.end();
  }
  else if(request.url == "/contact"){
    let filePath = path.join(__dirname,"public/contact.html");
    let data = fs.readFileSync(filePath);
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(data);
    response.end();
  }
  else if(request.url.match("\.css$")){
    console.log("Called....");
    let filePath = path.join(__dirname,"public"+request.url);
    let readStream = fs.createReadStream(filePath);
    response.writeHead(200,{"Content-Type":"text/css"});
    readStream.pipe(response);
    // readStream.pipe(WriteStream)
  }
  else if(request.url.match("\.jpeg$") || request.url.match("\.png$")){
    console.log("Called....");
    let filePath = path.join(__dirname,"public"+request.url);
    let readStream = fs.createReadStream(filePath);
    response.writeHead(200,{"Content-Type":"image"});
    readStream.pipe(response);
    // readStream.pipe(WriteStream)
  }
});

server.listen(3000,()=>{
    console.log("Server Started...");
});