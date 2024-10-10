import { useContext } from "react";
import Second from "./Second";
import { MessageContext } from "../App";

function First(){
    const {message} = useContext(MessageContext);
    return <>
      <h2>First Component...{message}</h2>
      <Second/>
    </>
}

export default First;