import { connect } from 'react-redux';
import { openModal } from '../../actions/ModalActions';
import Header from "./Header";
const mapStateToProps = (state) => ({

});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);