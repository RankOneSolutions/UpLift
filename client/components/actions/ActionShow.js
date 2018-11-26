import React, { Component } from 'react';

class ActionShow extends Component {

  componentDidMount(){
    // props.fetchAction(ownProps.match.params.actionId)
  }

  render() {
    let {action, muscle }= this.props;

    if (!action) {
      return null;
    }

    return (
      <div>
        <a href={action.link}>{action.name}</a>
  

          <p>{muscle.name}</p>
        <img src={muscle.imageLink}/>
        <a href={muscle.descriptionLink} />
      </div>
    );
  }
}

export default ActionShow;
