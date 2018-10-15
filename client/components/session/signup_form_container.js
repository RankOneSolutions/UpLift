import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Sign Up"
  };
};

// this will be where we dispatch the action that
// will create and sign up a user
const mdp = (dispatch) => ({
  action: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mdp)(SessionForm);