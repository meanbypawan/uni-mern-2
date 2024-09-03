const roomCleaning  = ()=>{
    console.log("Room cleaing in progress....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Room Cleaned....");
           reject("Room Cleaning Failed....");
        },4000);
    });
}

const removingGarbage = ()=>{
    console.log("Removing garbage in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Grabage removed...");
        },3500);
    })
}
Promise.all([roomCleaning(), removingGarbage()])
.then(results=>{
   console.log(results[0]);
   console.log(results[1]);
   console.log("Congratulation!! you got a ice-cream");
}).catch(err=>{
    console.log(err);
    console.log("Better Luck Next time");
});