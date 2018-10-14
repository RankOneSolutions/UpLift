import React, { Component } from 'react'
import Header  from './Header'
import './app.css'

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
        <h1>I'm in Redux and React Router! Tight.</h1>
        <h3>Check out some cute animals:</h3>

          {results.map(row =>
            <ul>
              <li>
                id: {row.id}
              </li>
              <li>
                name: {row.name}
              </li>
              <li>
                species: {row.species}
              </li>
              <li>
                number of legs: {row.leg_count}
              </li>
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default App;
