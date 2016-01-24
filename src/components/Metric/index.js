import React, { Component } from 'react';

import styles from './styles/index.css';

export default class Metric extends Component {
  renderMetas() {
    const { metric: { metadatas=[]} } = this.props;

    return metadatas.map((meta, index) => (<li key={index}>{meta}</li>));

  }
  render() {
    const { metric } = this.props;

    return (
      <li className={styles.metric}>
        {metric.name}
        <ul className={styles.metas}>{this.renderMetas()}</ul>
      </li>
    );
  }
}
