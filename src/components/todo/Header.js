import React,{useContext} from 'react';

import { Link } from 'react-router-dom';
import "./header.css";
function Header(props) {
    
   
    return (
        <header>
          <div>

          <button >

          <Link to="/"> HOME</Link>
          </button>
          <button><Link to="/setting"> setting</Link></button>
          </div>
        
      </header>
    );
}

export default Header;