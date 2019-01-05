import { connect } from "react-redux";
import SessionForm from "./SessionForm";
import { login } from "../../actions/SessionActions";
import {openModal, closeModal} from "../../actions/ModalActions";

const mapStateToProps = (state) => {
  return {
    formType: "Sign In"
  };
};

// this will be where we dispatch the action that
// will sign in a user
const mapDispatchToProps = (dispatch) => ({
  action: (user) => dispatch(login(user)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);