const first = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside First : "+n);
        callback(n+2);
    },2000);
}
const second = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside Second : "+n);
        callback(n+2);
    },4000);
}
const third = (n,callback)=>{
    setTimeout(()=>{
        console.log("Inside third : "+n);
        callback(n+2);
    },2800);
}
const fourth = (n)=>{
    setTimeout(()=>{
        console.log("Inside Fourth : "+n);
    },3200);
} 
first(10,(n)=>{
    second(n,(n)=>{
        third(n,(n)=>{
            fourth(n);
        });
    });
});