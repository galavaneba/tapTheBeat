import { connect } from 'react-redux';
import { State } from '../../models';
import { saveUser } from '../../actions';
import Result from './Result';

const mapStateToProps = (state: State) => ({
  score: state.results.score
});

export default connect(mapStateToProps, { saveUser })(Result);