import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("hello",()=>{
    console.log("Hello Friends...");
});
eventEmitter.on("add",(a,b)=>{
    console.log("Addition : "+(a+b));
});
eventEmitter.on("sub",(a,b)=>{
    console.log("Subtraction : "+(a-b));
});

eventEmitter.emit("add",20,10);
eventEmitter.emit("sub",45,7);