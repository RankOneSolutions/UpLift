import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch("https://getlifted.herokuapp.com/db")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div>
       <h1>I'm in Redux and React Router! Tight.</h1>
       <h3>Check out some data:</h3>
       <h5>{this.state.data}</h5>
      </div>
    );
  }
}

export default App;
