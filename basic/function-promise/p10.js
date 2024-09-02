/*
  class Promise{
    construcotr(callback){
    }

    then(){
      return promise;
    }
    catch(){}
    static all(){}
    static allSettled(){}
    statis race(){}
    -----
    -----
  }
*/
let p = new Promise((resolve,reject)=>{
   //resolve();
   reject();
});

p.then(()=>{
    console.log("then callback executed | promise is resolved..");
})
.catch(()=>{
    console.log("catch callback executed | promise is rejected...");
});

