import event from "events";

const eventEmitter = new event.EventEmitter();

eventEmitter.on("finish",()=>{
    console.log("Finish event caught...");
});
eventEmitter.addListener("end",()=>{
   console.log("End event caught...");
});
eventEmitter.once("error",()=>{
    console.log("Error event caught...");
});
eventEmitter.emit("finish");
eventEmitter.emit("end");
eventEmitter.emit("error");