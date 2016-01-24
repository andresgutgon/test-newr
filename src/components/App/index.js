import React, { Component } from 'react';

import styles from './styles/index.css';
import Header from '../Header';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.content}>
          <Header />
        </div>
      </div>
    );
  }
}
