import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react";

function EvenOddCounter(){
  const [state,dispatch] = useReducer((state,action)=>{
    if(action.type == "increment")
        state.counter = state.counter+1;
    else if(action.type == "even-counter")
         state.evenCounter = state.evenCounter + action.payload;
    else if(action.type == "odd-counter")
        state.oddCounter = state.oddCounter + 2;    
    return {...state};
  },{
    counter:100, // 'increment'
    evenCounter: 0, // even-counter
    oddCounter: 1 // odd-counter
  });
  return <>
    <h2>Even Odd Counter</h2>
    <button onClick={()=>dispatch({type:"increment"})}>Counter: {state.counter}</button>
    <button onClick={()=>dispatch({type:"even-counter",payload: 4})} >Even Counter : {state.evenCounter}</button>
    <button onClick={()=>dispatch({type:"odd-counter"})}>Odd Counter : {state.oddCounter}</button>
  </>
}

export default EvenOddCounter;