import { useEffect, useState } from "react";
import Header from "./Header";

function About(){
    const [counter,setCounter] = useState(100);
    useEffect(()=>{
        console.log("1 flever executed....");
    });
    useEffect(()=>{
        console.log("2. flever executed | Empty Dep. Array");
    },[]);
    useEffect(()=>{
        console.log("3 flever executed | counter dep|state");
    },[counter]);
    useEffect(()=>{
        return ()=>{
            console.log("4 fleve executed | UnMounted...");
        }
    },[]);
    return <>
       <Header/>
       <h1>About Component...</h1>
       <button onClick={()=>setCounter(counter+1)}>Counter:{counter}</button>
    </>
}
export default About;