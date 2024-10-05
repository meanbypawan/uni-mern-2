import Third from "./Third";

const { Component } = require("react");

export default class Second extends Component{
  render(){
    return <>
       <h1>Second Component..</h1>
       <Third message={this.props.message} setData={this.props.setData}/>
    </>
  }
}