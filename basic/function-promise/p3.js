/*
  1. Synchronouse/Blocking code
  2. Asynchronous/Non-blocking code
*/
/*
  task--1; // 5-min
  task--2; // 3-min
  task--3; // 4-min
  task--4; // 7-min
*/
console.log("At the start....");
setTimeout(function(){
    eatingPizza();
},2000);
console.log("At the end...");

const eatingPizza = ()=>{
    console.log("Pizza Done");
}
