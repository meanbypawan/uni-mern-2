const { Component } = require("react");

class App extends Component{
  constructor(){
    super();
    this.state = {
      counter: 100
    }
    console.log("Constructor executed...");
  }
  componentDidMount(){
    console.log("componentDidMount() called...");
  }
  componentDidUpdate(){
    console.log("ComponentDidUpdate() called...");
  }
  componentWillUnmount(){
    console.log("componentWillUnMount....");
  }
  shouldComponentUpdate(){
     if(this.state.counter%2==0)
       return true;
      return false; 
  }
  render(){
    console.log("render() executed...");
    return <>
      <h1>App Component..</h1>
      <button onClick={()=>this.setState({counter:this.state.counter+1})}>Change Counter : {this.state.counter}</button>
    </>
  }
}

export default App;