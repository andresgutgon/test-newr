import React, { Component } from 'react';

import styles from './styles/index.css';
import Header from '../Header';
import Metric from '../Metric';

const METADATAS = [
  'Monthly resolution',
  '162 updates',
  'Limit x reached',
];

const METRICS = [
  {
    name: 'Metric Name',
    metadata: METADATAS[0],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[1],
      METADATAS[0],
    ],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[1],
    ],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[2],
    ],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[2],
      METADATAS[0],
    ],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[1],
    ],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[0],
    ],
  },
  {
    name: 'Metric Name',
    metadatas: [
      METADATAS[0],
      METADATAS[1],
      METADATAS[2],
    ],
  },
];

export class App extends Component {
  renderMetrics() {
    return METRICS.map((metric, index) => (<Metric key={index} metric={metric}/>));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.content}>
          <Header />
          <ul className={styles.metrics}>{this.renderMetrics()}</ul>
        </div>
      </div>
    );
  }
}
