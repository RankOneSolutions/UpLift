import React, { Component } from 'react';
import "../assets/sessionModal.css";
import { Button } from "../styledComponents/buttons";
import { SessionContainer } from "../styledComponents/divs";
import { SessionInput } from "../styledComponents/inputs";

class SessionForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email:'' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {

    return (event) =>  this.setState({ [field]: event.target.value });
  }
  
  handleSubmit(e) {
    e.preventDefault();
    
    // this will handle whether a user is logging in or signing up
    // this.props.action(this.state).then(() => this.props.closeModal();)

  }

  handleLoginInputs(){
    // debugger;
    if (this.props.formType === "Sign In") {
      return (
        <SessionInput type="text"
          placeholder="Username or Email"
          onChange={this.update("username")}
          value={this.state.username} />
      );
    } else {
      return (
      <>
          <SessionInput type="text"
            placeholder="Username"
            onChange={this.update("username")}
            value={this.state.username} />
          <SessionInput type="email"
            placeholder="Email"
          onChange={this.update('email')}
          value={this.state.email} />
      </>
      );
    }

  }

  render() {
    return (
      <div>
        <form className="session-form" onSubmit={this.handleSubmit} >
          <h1>{this.props.formType}</h1>
          <SessionContainer>
            {this.handleLoginInputs()}
            <SessionInput type="password"
                placeholder="Password"
                onChange={this.update('password')}
                value={this.state.password}/>
            <Button>{this.props.formType}</Button>
          </SessionContainer>
        </form>
      </div>
    );
  }
}

export default SessionForm;
