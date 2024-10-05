import Fourth from "./Fourth";

const { Component } = require("react");

export default class Third extends Component{
  render(){
    return <>
       <h1>Third Component..</h1>
       <Fourth message={this.props.message} setData={this.props.setData}/>
    </>
  }
}