import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from 'components/Root';
import { toggle } from 'reducers/app';

function mapStateToProps(state) {
  return {
    metrics: state.metric.metrics.entities,
    editing: state.app.editing,
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch)
// }

export default connect(mapStateToProps, { toggle })(Root);
