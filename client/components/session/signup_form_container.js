import { connect } from "react-redux";
import SessionForm from "./session_form";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Sign Up"
  };
};

// this will be where we dispatch the action that
// will create and sign up a user
const mdp = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mdp)(SessionForm);