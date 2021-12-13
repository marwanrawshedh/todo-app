import React from "react";
import Form from "./components/todo/Form.js";
import ContextData from "./components/todo/Context.js";
import Header from "./components/todo/Header.js";
import Setting from "./components/todo/Setting.js";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
 function App() {
  
    return (
      <>
        <BrowserRouter>
          <ContextData>
                <Header />
            <Switch>
              <Route exact path="/">
                <Form />
              </Route>
            
            <Route exact path="/setting">
                <Setting />
              </Route>
            </Switch>
          </ContextData>
        </BrowserRouter>
      </>
    );
  }

export default App;