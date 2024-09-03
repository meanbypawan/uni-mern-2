const task = (n)=>{
   return new Promise((resolve,reject)=>{
    if(n %2 == 0)
        resolve("Giver number is even");
    else
      reject("Given number is odd"); 
   });
}

task(11).then((result)=>{
   console.log(result);
}).catch((rejectedResponse)=>{
  console.log(rejectedResponse);
});