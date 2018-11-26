import { connect } from "react-redux";
import SessionForm from "./SessionForm";
import { signup } from "../../actions/SessionActions";
import { closeModal } from "../../actions/ModalActions";

const mapStateToProps = (state) => {
  return {
    formType: "Sign Up"
  };
};

// this will be where we dispatch the action that
// will create and sign up a user
const mdp = (dispatch) => ({
  action: (user) => dispatch(signup(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mdp)(SessionForm);