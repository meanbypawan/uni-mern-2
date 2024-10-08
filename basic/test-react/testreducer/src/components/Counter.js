import { type } from "@testing-library/user-event/dist/type";
import { useReducer } from "react"

export default function Counter(){
    // state:{counter:100}
    const [state,dispatch] = useReducer((state,action)=>{
         // state:{counter:100}
         // action : {type:'decrement',payload: 'input'}
         if(action.type == "increment"){
            state.counter = state.counter + 1;
         }
         else if(action.type == "decrement"){
           state.counter = state.counter - 1;
         }
         return {...state};
    },{
        counter: 100
    });
    return <>
       <h1>Counter Component...</h1>
       <h1>{state.counter}</h1>
       <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
       <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    </>
}