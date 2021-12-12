import React,{useContext} from 'react';
import {ContextHandle}  from'./Context'
import "./header.css";
function Header(props) {
    const data = useContext(ContextHandle);
   
    return (
        <header>
        <h1>To Do List: {data.incomplete} items pending</h1>
      </header>
    );
}

export default Header;