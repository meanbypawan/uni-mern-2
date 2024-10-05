const { Component } = require("react");

export default class Fourth extends Component{
  
  sendDataToParent = ()=>{
    let message = this.data.value;
    this.props.setData(message); 
  }  
  render(){
    return <>
       <h1>Fourth Component..</h1>
       <h3>{this.props.message}</h3>
       <hr/>
       <input ref={(dataRef)=>{this.data = dataRef}} type="text"/><button onClick={this.sendDataToParent}>Send</button>
    </>
  }
}