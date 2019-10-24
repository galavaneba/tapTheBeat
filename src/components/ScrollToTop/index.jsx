/* eslint react/prop-types: 0 */
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollToTop extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
