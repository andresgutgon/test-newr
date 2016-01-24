import React, { Component } from 'react';

import styles from './styles/index.css';
import Logo from './Logo';
import Bar from './Bar';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Bar />
      </div>
    );
  }
}
