import React, { Component } from 'react';

import MetricTextarea from '../MetricTextarea';

import styles from './styles/index.css';

class MetricButton extends Component {
  renderButton() {
    return (
      <button className={styles.button}>
        <i className={`${styles.icon} fa fa-plus`}></i>
        <span className={styles.buttonText}>Create new metric</span>
      </button>
    );
  }

  render() {
    const { editing } = this.props;

    return (
      <li className={styles.buttonWrapper}>
        {!editing && this.renderButton()}
        {editing && <MetricTextarea showButton={true}/>}
      </li>
    );
  }
}

MetricButton.defaultProps = {
  editing: false,
};

export default MetricButton;
