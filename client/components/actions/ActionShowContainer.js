import { connect } from "react-redux";
import ActionShow from "./ActionShow";
// import whatever is required to fetch the data for a action


const mapStateToProps = (state, ownProps) => {
  //const action = state.actions[ownProps.match.params.actionId] 
  const action = { id: 1, name: 'Push up', link: 'https://www.bodybuilding.com/exercises/pushups', muscleId: 7};
  const muscle = { id: 7, name: 'back', imageLink: 'https://qph.fs.quoracdn.net/main-qimg-fc480bffd215f42ff112f496b7de4fc3.webp', descriptionLink: 'https://www.quora.com/What-are-the-back-muscles-called' };
  return { action, muscle};
};


const mapDispatchToProps = (dispatch) => {
// something like return { actionId => dispatch(fetchAction(actionId))}
};

export default connect(mapStateToProps, null)(ActionShow);