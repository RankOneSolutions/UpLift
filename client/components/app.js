import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: [],
    };
  }

  componentDidMount() {
    fetch("https://getlifted.herokuapp.com/db")
      .then(response => response.json())
      .then(data => this.setState({ hits: data.results }));
  }

  render() {
    const {cute_animals} = this.state;

    return (
      <div>
       <h1>I'm in Redux and React Router! Tight.</h1>
       <h3>Check out some data:</h3>
       {console.log(cute_animals)}
      </div>
    );
  }
}

export default App;
