import React, { useContext } from "react";

import { ContextHandle } from "./Context";
import { LoginContext } from "../auth/context";
function Setting(props) {
  const data1 = useContext(LoginContext);
  const data = useContext(ContextHandle);
  const myFunction = () => {
    let input = document.getElementById("m");
    data.setChangeSetting(input.value);
  };
  return (
    <>{data1.loggedIn && 
    <div >

      <form>
        <label>number of card per page</label>
        <input defaultValue={`${data.changeSetting}`}
          id="m"
        ></input>
      </form>
      <label>

      show the complete card:
        <button onClick={()=>data.setIsTrue(data.isTrue?false:true)} > {`${data.isTrue}`}</button>
      </label>
      <br></br>
      <button onClick={() => myFunction()}>submit</button>
</div>}
</>
  );
}

export default Setting;
