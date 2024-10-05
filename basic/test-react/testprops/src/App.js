import { Component } from "react";
import First from "./components/First";
import Second from "./components/Second";
class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 1000
    }
  }
  changeCounter = ()=>{
    this.setState({counter: this.state.counter + 1});
  }
  render(){
    let message = "Hello Child , How are you ?";
    let greetUser = "Hi...";
    return <>
      <h2>App Component [Parent Component] [Counter: {this.state.counter}]</h2>
      <hr/>
      <First message={message} greetUser={greetUser}/>
      <Second changeCounter={this.changeCounter}/>
    </>
  }
}
export default App;