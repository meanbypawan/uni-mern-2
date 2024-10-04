import { Component } from "react";

export default class IncDecCounter extends Component{
    constructor(){
        super();
        this.state = {
            counter: 100
        }
    }
    incrementCounter = ()=>{
        this.setState({counter: this.state.counter + 1});
    }
    decrementCounter = ()=>{
        this.setState({counter: this.state.counter - 1});
    }
    render(){
        return <>
          <h1>IncDec Component...</h1>
          <h2>{this.state.counter}</h2>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
        </>
    }
}