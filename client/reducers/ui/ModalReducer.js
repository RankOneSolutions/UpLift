import { OPEN_MODAL, CLOSE_MODAL } from "../../actions/ModalActions";

export default (state = false, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.modal;
    case CLOSE_MODAL:
      return false;
    default:
      return state;
  }
};