import { connect } from "react-redux";
import SessionForm from "./session_form";
import { login } from "../../actions/session_actions";
import {openModal, closeModal} from "../../actions/modal_actions";

const mapStateToProps = (state) => {
  return {
    formType: "Sign In"
  };
};

// this will be where we dispatch the action that
// will sign in a user
const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  openModal: () => dispatch(openModal()),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);