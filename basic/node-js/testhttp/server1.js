import http from "http";

const server = http.createServer((request,response)=>{
   response.write("Hello clients...");
   response.end();
});

// http://localhost:3000
server.listen(3000,()=>{
    console.log('Server Started...');
});