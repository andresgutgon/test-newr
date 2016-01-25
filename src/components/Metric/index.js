import React, { Component } from 'react';

import MetricTextarea from '../MetricTextarea';
import styles from './styles/index.css';

export default class Metric extends Component {
  renderMetas() {
    const { metric: { metadatas=[]} } = this.props;

    return metadatas.map((meta, index) => (<li key={index}>{meta}</li>));
  }

  renderInfo() {
    const { metric } = this.props;

    return (
      <div>
        <h3 className={styles.metricName}>{metric.name}</h3>
        <ul className={styles.metas}>{this.renderMetas()}</ul>
      </div>
    );
  }

  render() {
    const { editing } = this.props;

    return (
      <li className={styles.metric}>
        {!editing && this.renderInfo()}
        {editing && <MetricTextarea simple={true}/>}
      </li>
    );
  }
}

Metric.defaultProps = {
  editing: false,
};

export default Metric;
