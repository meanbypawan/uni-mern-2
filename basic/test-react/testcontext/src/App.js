import { createContext } from "react";
import First from "./components/First";

export const MessageContext =  createContext();
export const DataContext = createContext();  
function App(){
  let message = "Indore, Cleanest City Of India";
  return <>
     <h1>App Component...</h1>
     <MessageContext.Provider value={{message:message}}>
      <DataContext.Provider value={{status: 404}}>
       <First/>
      </DataContext.Provider> 
     </MessageContext.Provider>
  </>
}
export default App;