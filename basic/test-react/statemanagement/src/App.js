import { Component } from "react";
import Counter from "./components/Counter";
import IncDecCounter from "./components/IncDecCounter";
import MultiCounter from "./components/MultiCounter";
import StudentDetails from "./components/StudentDetails";

// <App/>

export default class App extends Component{
  
  render(){
    return <>
      {/* <Counter/>
      <IncDecCounter/>
      <MultiCounter/> */}
      <StudentDetails/>
    </>
  }
}