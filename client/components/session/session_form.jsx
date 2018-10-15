import React, { Component } from 'react';

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
    this.props.action(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="session-form">
        <h1>{this.props.formType}</h1>
        <label>username
          <input type="text"
            onChange={this.update("username")}
            value={this.state.username}
          />
        </label>
        <label>Email
          <input type="email"
            onChange={this.update('email')}
            value={this.state.password}
          />
        </label>
        <label>Password
          <input type="password"
            onChange={this.update('password')}
            value={this.state.password}
          />
        </label>
        <button>{this.props.formType}</button>
      </form>
    );
  }
}

export default SessionForm;
