import http from "http";
import fs from "fs";
import url, { fileURLToPath } from "url";
import path from "path";
const server = http.createServer((request,response)=>{
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname=  path.dirname(__filename);
  
  let parsedUrl = url.parse(request.url,true);
  console.log(parsedUrl);
  if(parsedUrl.pathname == "/home" && request.method == "GET"){
    let filePath =  path.join(__dirname,"public/home.html");
    let data = fs.readFileSync(filePath);
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(data);
    response.end();
  }
  else if(parsedUrl.pathname == "/about"){
     let filePath = path.join(__dirname,"public/about.html");
     let data = fs.readFileSync(filePath);
     response.writeHead(200,{"Content-Type":"text/html"});
     response.write(data);
     response.end();
  }
  else if(parsedUrl.pathname == "/contact"){
    let filePath = path.join(__dirname,"public/contact.html");
    let data = fs.readFileSync(filePath);
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write(data);
    response.end();
  }
  else if(parsedUrl.pathname.match("\.css$")){
    console.log("Called....");
    let filePath = path.join(__dirname,"public"+parsedUrl.pathname);
    let readStream = fs.createReadStream(filePath);
    response.writeHead(200,{"Content-Type":"text/css"});
    readStream.pipe(response);
    // readStream.pipe(WriteStream)
  }
  else if(parsedUrl.pathname.match("\.jpeg$") || parsedUrl.pathname.match("\.png$")){
    console.log("Called....");
    let filePath = path.join(__dirname,"public"+parsedUrl.pathname);
    let readStream = fs.createReadStream(filePath);
    response.writeHead(200,{"Content-Type":"image"});
    readStream.pipe(response);
    // readStream.pipe(WriteStream)
  }
  // "/add?a=20&b=10" == "/add"
  else if(parsedUrl.pathname == "/add" && request.method == "GET"){
    let a = parsedUrl.query.a * 1;
    let b = parsedUrl.query.b * 1;
    response.end("Addition : "+(a+b));
  }
});

server.listen(3000,()=>{
    console.log("Server Started...");
});