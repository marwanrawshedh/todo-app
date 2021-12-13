import React, { useContext } from "react";

import { ContextHandle } from "./Context";

function Setting(props) {
  const data = useContext(ContextHandle);
  const myFunction = () => {
    let input = document.getElementById("m");
    data.setChangeSetting(input.value);
  };
  return (
    <div>
      <form>
        <label>number of card per page</label>
        {console.log(data.changeSetting)}
        <input defaultValue={`${data.changeSetting}`}
          id="m"
        ></input>
      </form>
      <label>

      hide the complete card:
        <button onClick={()=>data.setIsTrue(data.isTrue?false:true)} > {`${data.isTrue}`}</button>
      </label>
      <br></br>
      <button onClick={() => myFunction()}>submit</button>
    </div>
  );
}

export default Setting;
