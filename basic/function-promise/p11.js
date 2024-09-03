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
first(10)
.then(result=>{
  second(result)
  .then(result=>{
    third(result)
    .then(result=>{
        console.log(result);
    })
  })
});