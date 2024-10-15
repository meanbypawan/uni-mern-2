import { useDispatch, useSelector } from "react-redux";
import { decrementCounter, incrementCounter } from "./redux-config/CounterSlice";

function App(){
  let {message} = useSelector((store)=>store.DataMessage);
  let {m1,m2,m3} = useSelector((store)=>store.WishingMessage);
  let {counter} = useSelector((store)=>store.Counter);
  const dispatch = useDispatch();
  return <>
     <h1>App Component...{message}</h1>
     <h3>{m1}</h3>
     <h3>{m2}</h3>
     <h3>{m3}</h3>
     <h1>Counter : {counter}</h1>
     <button onClick={()=>dispatch(incrementCounter())}>Increment</button>
     <button onClick={()=>{dispatch(decrementCounter())}}>Decrement</button>
  </>
}
export default App;