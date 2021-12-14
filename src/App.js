import React,{useContext} from "react";
import Form from "./components/todo/Form.js";
import ContextData from "./components/todo/Context.js";
import Header from "./components/todo/Header.js";
import Setting from "./components/todo/Setting.js";
import Login from './components/auth/login.js';
import  LoginProvider from './components/auth/context.js';
import {
  BrowserRouter,
  Switch,
  Route,
} 
from "react-router-dom/cjs/react-router-dom.min";

 function App() {
    return (
      <>
        <BrowserRouter>
          <ContextData>
        <LoginProvider>
                <Header />
            <Login/>

            { <Switch>
              <Route exact path="/">
               <Form />
              </Route>
            
            <Route exact path="/setting">
                <Setting />
              </Route>
            </Switch>}
          </LoginProvider>
          </ContextData>
        </BrowserRouter>
      </>
    );
  }

export default App;