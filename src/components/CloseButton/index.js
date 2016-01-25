import React, { Component } from 'react';

import styles from './styles/index.css';

export default class CloseButton extends Component {
  render() {
    return (
      <button className={styles.button}>
        <i className='fa fa-times'></i>
      </button>
    );
  }
}
