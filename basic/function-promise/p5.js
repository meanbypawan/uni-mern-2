/*
   You hava multiple asynchronous operation ..
*/
const task1 = (callback)=>{
    setTimeout(()=>{
        console.log("Task-1 is executed...");
        callback();
    },3000);
}
const task2 = (callback)=>{
    setTimeout(()=>{
        console.log("Task-2 is executed...");
        callback();
    },4500);
}
const task3 = (callback)=>{
    setTimeout(()=>{
        console.log("Task-3 is executed...");
        callback();
    },2500);
}
const task4 = ()=>{
    setTimeout(()=>{
        console.log("Task-4 is executed...");
    },5000);
}

// task1()---> task2()-->task3()-->task4()
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4();
        });
    });
});