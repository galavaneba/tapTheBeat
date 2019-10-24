import { connect } from 'react-redux';
import { State } from '../../models';
import ResultsList from './ResultsList';
import { fakeCall } from '../../actions/index';

const mapStateToProps = (state: State) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { fakeCall })(ResultsList);