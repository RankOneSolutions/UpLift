import React, { Component } from 'react';

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
            <Route path="*" component={NotFound} />
          </Switch>
          { results.map((result) => <p key={result.id}>{result}</p>)}
        </div>
      </div>
    );
  }
}

export default App;
