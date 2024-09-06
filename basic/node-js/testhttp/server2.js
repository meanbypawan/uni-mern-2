import http from "http";

http.createServer((request,response)=>{
  if(request.url == "/home" || request.url == "/"){
    response.write("Home Page");
  }
  else if(request.url == "/about"){
    response.write("About Page");
  }else if(request.url == "/contact"){
    response.write("Contact Page");
  }
  response.end();
}).listen(3001,()=>{
    console.log("Server 2 started...");
});