import { useContext } from "react";
import { MessageContext } from "../App";

function Third(){
    const {message} = useContext(MessageContext);
    return <>
      <h2>Third Component...{message}</h2>
    </>
}

export default Third;