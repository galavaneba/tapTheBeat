import { connect } from 'react-redux';
import { State } from '../../models';
import Game from './Game';
import { saveResult } from '../../actions';

const mapStateToProps = (state: State) => ({
  results: state.results,
  score: state.results.score
});

export default connect(mapStateToProps, { saveResult })(Game);