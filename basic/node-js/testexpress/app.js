import express from "express";

const app = express();
// app is express application instance here...

app.get("/home",(request,response,next)=>{
    response.end("Home Page");
});
app.get("/about",(request,response,next)=>{
    response.end("About Page");
});
app.get("/add",(request,response)=>{
  let a = request.query.a * 1;
  let b = request.query.b * 1;
  response.end("Addition : "+(a+b));
});
app.listen(3000,()=>{
    console.log("server started...");
});