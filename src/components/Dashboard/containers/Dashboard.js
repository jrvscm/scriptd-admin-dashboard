import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect, populate } from 'react-redux-firebase';
import Dashboard from '../Dashboard';

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = {

};
export default compose(
  firebaseConnect([]),
  connect(mapStateToProps)
)(Dashboard);
