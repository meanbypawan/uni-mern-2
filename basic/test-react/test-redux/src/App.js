import { useSelector } from "react-redux";

function App(){
  let {message} = useSelector((store)=>store.DataMessage);
  let {m1,m2,m3} = useSelector((store)=>store.WishingMessage);
  let {counter} = useSelector((store)=>store.Counter);
  return <>
     <h1>App Component...{message}</h1>
     <h3>{m1}</h3>
     <h3>{m2}</h3>
     <h3>{m3}</h3>
     <h1>Counter : {counter}</h1>
     <button>Increment</button>
     <button>Decrement</button>
  </>
}
export default App;