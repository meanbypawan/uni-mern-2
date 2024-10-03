const { Component } = require("react");
/*
 JSX :- Javascript XML
 Data Binding
 */
class App extends Component{
  render(){
    let name = "Cheeku Sing";
    let age = 16;
    let gender = "Male";
    let address =  "Vijay nagar , Indore MP";
    return <>
      <h1 style={{color:"red"}}>{name}</h1>
      <h2 style={{color: age > 18 ? "blue" : "green"}}>{age}</h2>
      <h2>{gender}</h2>
      <h2>{address}</h2>
      <h1>{2+3}</h1>
      <h1>{"hello".toUpperCase()}</h1>
    </>
  }
}
export default App;