import fs from "fs";

const readABCFile = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("abc.txt","utf8",(err,data)=>{
            err ? reject(err) : resolve(data);
        });
    });
}
const readXYZFile = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("xyz.txt","utf8",(err,data)=>{
            err ? reject(err) : resolve(data);
        });
    });
};
Promise.all([readABCFile(),readXYZFile()])
.then(results=>{
    fs.writeFile("result.txt",results[0]+"\n"+results[1],(err)=>{
        err ? console.log(err) : console.log("Operation success");
    })
})
.catch(err=>{
    console.log(err);
});