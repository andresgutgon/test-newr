import React, { Component } from 'react';

import CloseButton from '../CloseButton';

import styles from './styles/index.css';

class MetricTextarea extends Component {
  render() {
    const { simple, showButton = false } = this.props;
    const className = simple ? styles.textareaWrapper : styles.textareaWrapperStyled;

    return (
      <div className={className}>
        <textarea rows={1} placeholder='Write metric name'/>
        {showButton && <CloseButton />}
      </div>
    );
  }
}

export default MetricTextarea;
