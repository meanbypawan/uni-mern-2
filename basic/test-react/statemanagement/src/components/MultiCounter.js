import { Component } from "react";

export default class MultiCounter extends Component{
    constructor(){
        super();
        this.state = {
            evenCounter : 100,
            oddCounter : 101
        }
    }
    render(){
        return <>
          <h1>MultiCounter</h1>
          <button onClick={()=>{this.setState({evenCounter: this.state.evenCounter+2})}}>Increment Even Counter : ({this.state.evenCounter})</button>
          <button onClick={()=>{this.setState({oddCounter: this.state.oddCounter+2})}}>Increment Odd Counter : ({this.state.oddCounter})</button>
        </>
    }
}