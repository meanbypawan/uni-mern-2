import First from "./components/First";

const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state={
      dataFromChild: ""
    }
  }
  setData = (data)=>{
    this.setState({dataFromChild: data})
  }
  render(){
    let message = "Hello...";
    return <>
       <h1>App Component.. [{this.state.dataFromChild}]</h1>
       <First message={message} setData={this.setData}/>
    </>
  }
}
export default App;