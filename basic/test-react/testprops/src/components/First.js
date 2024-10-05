import { Component } from "react";

class First extends Component{
    render(){
        let {message, greetUser} = this.props;
        return <>
          <h2>First Component [Child of App]</h2>
          <h3>{message} : {greetUser}</h3>
        </>
    }
}

export default First;