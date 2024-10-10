import { useContext } from "react";
import Third from "./Third";
import { DataContext } from "../App";

function Second(){
    const {status} = useContext(DataContext);
    return <>
      <h2>Second Component...{status}</h2>
      <Third/>
    </>
}

export default Second;