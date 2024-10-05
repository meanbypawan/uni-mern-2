import { Component } from "react";

class Second extends Component{
    render(){
        let {changeCounter} = this.props;
        return <>
           <h2>Second Component...</h2>
           <hr/>
           <button onClick={()=>changeCounter()} >Change Counter</button>
        </>
    }
}
export default Second;