import React from 'react';
import {When} from 'react-if';

import { LoginContext } from './context.js';

class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });
  };
  
  handleSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    
    this.context.login(this.state.username, this.state.password);
  };

  render() {
    return (
      <>
        

        <When condition={!this.context.loggedIn}>
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="UserName"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="password"
              name="password"
              onChange={this.handleChange}
            />
            <button type='Submit'>Login</button>
          </form>
        </When>
      </>
    );
  }
}

export default Login;
