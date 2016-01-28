import React, { Component } from 'react';

import styles from './styles/index.css';

export default class CloseButton extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <button className={styles.button} onClick={onClick}>
        <i className='fa fa-times'></i>
      </button>
    );
  }
}
