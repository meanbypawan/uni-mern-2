console.log("At the start....");
const eatingPizza = ()=>{
    setTimeout(()=>{
        console.log("Pizza Done....");
    },3000);
}
const meetingWithFriends = ()=>{
    setTimeout(()=>{
        console.log("Meeting Done....");
    },5000);
}
const servicingCar = ()=>{
    setTimeout(()=>{
        console.log("Servicing Done....");
    },4000);
}
eatingPizza(); // 3000
meetingWithFriends(); // 5000
servicingCar(); // 4000
console.log("At the end.....");