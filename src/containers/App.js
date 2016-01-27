import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Root from 'components/Root';
import { toggle } from 'reducers/app';
import { updateMetricName } from 'reducers/metric';

function mapStateToProps(state) {
  return {
    metrics: state.metric.metrics.entities,
    editing: state.app.editing,
  }
}

export default connect(
  mapStateToProps,
  {
    toggle,
    updateMetricName,
  }
)(Root);
