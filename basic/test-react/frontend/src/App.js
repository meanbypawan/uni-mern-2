import { Route, Routes } from "react-router-dom";
import DashBoard from "./components/dashboard/Dashboard";

function App(){
  return <>
    <Routes>
      <Route path="/" element={<DashBoard/>}/>
    </Routes>
  </>
}

export default App;