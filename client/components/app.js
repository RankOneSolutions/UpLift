import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import HeaderContainer  from './header/header_container';
import './assets/app.css';
import About from './About';
import Home from './Home';
import NotFound from './error/NotFound';
import SessionModal from "./modal/session_modal";


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
        <HeaderContainer />
        <SessionModal />
        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
