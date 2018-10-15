import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Header  from './header/Header';
import './assets/app.css';
import About from './About';
import Home from './Home';
import NotFound from './error/NotFound';
import LoginFormContainer from './session/login_form_container';
import SignpFormContainer from './session/signup_form_container';


// we should probably put in a css reset but I didn't want to mess with Jake's styling
// import './assets/reset.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
    };
  }

  componentDidMount() {
    fetch("https://getlifted.herokuapp.com/db")
      .then(response => response.json())
      .then(data => this.setState({ results: data }));
  }

  render() {
    const {results} = this.state;

    return (
      <div>
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignpFormContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
