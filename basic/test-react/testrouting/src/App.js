import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import SignIn from "./components/SignIn";

function App(){
  return <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/sign-in" element={<SignIn/>}/>
    </Routes>
  </>
}
export default App;