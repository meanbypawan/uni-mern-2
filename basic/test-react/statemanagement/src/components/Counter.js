import { Component } from "react";

export default class Counter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 100
        }
    }
    incrementCounter = ()=>{
       this.setState({counter: this.state.counter + 1}); 
    }
    render(){
      return <>
        <h3>{this.state.counter}</h3>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </>    
    }
}