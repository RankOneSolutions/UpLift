import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom";
import Header  from './Header'
import './app.css'
import About from './About'
import Home from './Home'
import NotFound from './error/NotFound'

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
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
