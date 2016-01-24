import React, { Component } from 'react';

import styles from './styles/index.css';

export default class Bar extends Component {
  render() {
    return (
      <div className={styles.bar}>
        <button className={styles.button}><i className='fa fa-pencil'></i></button>
        <div className={styles.name}>
          averyverylargemailhere@compani.com account of User with a very very large text
        </div>
      </div>
    );
  }
}
