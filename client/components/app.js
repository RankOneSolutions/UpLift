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
       <script>console.log({this.state.data})</script>
      </div>
    );
  }
}

export default App;
