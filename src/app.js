import React from 'react';
import Form from './components/todo/Form.js';
import ContextData from './components/todo/Context.js';
import Header from './components/todo/Header.js';
export default class App extends React.Component {
  render() {
 
    return (
    <>
    
    <ContextData>

      <Header/>
      <Form/>
    </ContextData>
    
    </>
    );
  }
}
