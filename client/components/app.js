import React, { Component } from 'react';
<<<<<<< HEAD
=======
import { Route, Switch } from "react-router-dom";
import HeaderContainer  from './header/HeaderContainer';
import './assets/app.css';
import About from './About';
import ActionShowContainer from './actions/ActionShowContainer';
import Home from './Home';
import NotFound from './error/NotFound';
import SessionModal from "./modal/SessionModal";


// we should probably put in a css reset but I didn't want to mess with Jake's styling
// import './assets/reset.css';

>>>>>>> Rename all files to follow JS standards

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: []
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
            <Route path="/action/:actionId" component={ActionShowContainer} />
            <Route path="*" component={NotFound} />
          </Switch>
          { results.map((result) => <p key={result.id}>{result}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
