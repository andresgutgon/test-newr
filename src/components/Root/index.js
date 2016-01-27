import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import styles from './styles/index.css';
import Header from 'components/Header';
import Metric from 'components/Metric';
import MetricButton from 'components/MetricButton';

class Root extends Component {
  constructor() {
    super();
    this._handleEditingToggle = this._handleEditingToggle.bind(this);
  }

  _handleEditingToggle() {
    this.props.toggle();
  }

  renderMetrics() {
    const { metrics, editing, updateMetricName } = this.props;

    return metrics.map((metric, index) => {
      return (
        <Metric
          key={index}
          metric={metric}
          editing={editing}
          updateMetricName={updateMetricName}
        />
      );
    });
  }

  render() {
    const { editing } = this.props;

    return (
      <div className={styles.app}>
        <div className={styles.content}>
          <Header editing={editing} onToggle={this._handleEditingToggle} />
          <ul className={styles.metrics}>
            {this.renderMetrics()}
            <MetricButton />
          </ul>
        </div>
      </div>
    );
  }
}

export default Root;
