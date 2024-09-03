const first = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside First : "+n);
            resolve(n+2);
        },3000);
    });
}
const second = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside Second : "+n);
            resolve(n+2);
        },2300);
    });
}
const third = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside Third : "+n);
            resolve(n+2);
        },3500);
    });
}
const fourth = (n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Inside Fourth : "+n);
            resolve(n+2);
        },3500);
    });
}
async function executeTask(){
    let result = await first(10);
    result = await second(result);
    result = await third(result)
    await fourth(result);
}
executeTask();

//executeTask().then(result=>console.log(result));