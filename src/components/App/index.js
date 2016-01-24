import React, { Component } from 'react';

import styles from './styles/index.css';
import Logo from '../Logo';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Logo/>
        App base component
      </div>
    );
  }
}
