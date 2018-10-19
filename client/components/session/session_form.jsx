import React, { Component } from 'react';
import "../assets/sessionform.css";


class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email:'' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (event) => this.setState({ [field]: event.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    // this will handle whether a user is logging in or signing up
    // this.props.action(this.state).then(() => this.props.closeModal();)

  }

  render() {
    return (
      <div>
        <form className="session-form" onSubmit={this.handleSubmit} >
          <h1>{this.props.formType}</h1>
            <input type="text" placeholder="Username"
              onChange={this.update("username")}
              value={this.state.username} />
            <input type="email" placeholder="Email"
              onChange={this.update('email')}
              value={this.state.password}
            />
            <input type="password" placeholder="Password"
              onChange={this.update('password')}
              value={this.state.password}
            />
          <button>{this.props.formType}</button>
        </form>
      </div>
    );
  }
}

export default SessionForm;
