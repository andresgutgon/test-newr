import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from 'components/Root';
import { toggle } from 'reducers/app';
import { updateMetricName, removeMetric } from 'reducers/metrics';

function mapStateToProps(state) {
  return {
    metrics: state.metrics.entities,
    editing: state.app.editing,
  }
}

export default connect(
  mapStateToProps,
  {
    toggle,
    updateMetricName,
    removeMetric,
  }
)(Root);
