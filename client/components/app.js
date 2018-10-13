import React, { Component } from 'react';

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
       <h1>I'm in Redux and React Router! Tight.</h1>
       <h3>Check out some cute animals:</h3>
       <ul>
        {results.foreach(row =>
          <li>
            id: {row.id}
            name: {row.name}
            species: {row.species}
            number of legs: {row.leg_count}
          </li>
        )}
      </ul>
      </div>
    );
  }
}

export default App;
