import React, { Component } from 'react';

import styles from './styles/index.css';

class MetricTextarea extends Component {
  render() {
    const { simple } = this.props;
    const className = simple ? styles.textareaWrapper : styles.textareaWrapperStyled;

    return (
      <div className={className}>
        <textarea rows={1} placeholder='Write metric name'/>
      </div>
    );
  }
}

export default MetricTextarea;
