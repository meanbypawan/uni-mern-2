import Second from "./Second";

const { Component } = require("react");

export default class First extends Component{
  render(){
    return <>
       <h1>First Component..</h1>
       <Second message={this.props.message} setData={this.props.setData}/>
    </>
  }
}