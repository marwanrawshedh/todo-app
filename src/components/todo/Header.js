import React,{useContext} from 'react';
import { When } from 'react-if';
import { Link } from 'react-router-dom';
import "./header.css";
import { LoginContext } from "../auth/context";
function Header(props) {
  const data1 = useContext(LoginContext);
   
    return (
      <header>
          
          {data1.loggedIn && 

          <div>

          <button >

          <Link to="/"> HOME</Link>
          </button>
          <button><Link to="/setting"> setting</Link></button>
          </div>
}<When condition={data1.loggedIn}>
          <button onClick={data1.logout}>Log Out</button>
        </When>
      </header>
    );
}

export default Header;