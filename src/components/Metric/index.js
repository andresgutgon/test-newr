import React, { Component } from 'react';

import CloseButton from '../CloseButton';
import Title from './Title';

import styles from './styles/index.css';

class Metric extends Component {
  constructor() {
    super();
    this.state = {
      isHovered: false,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMetricRemove = this.onMetricRemove.bind(this);
  }

  renderMetas() {
    const { metric: { metadatas=[]} } = this.props;

    return metadatas.map((meta, index) => (<li key={index}>{meta}</li>));
  }

  onMouseOver() {
    const { isHovered } = this.state;

    this.setState({isHovered: !isHovered});
  }

  onMetricRemove() {
    const { metric: { id }, removeMetric } = this.props;
    removeMetric(id);
  }

  render() {
    const {
      editing,
      metric,
      updateMetricName,
      removeMetric,
    } = this.props;
    const { isHovered } = this.state;

    return (
      <li
        className={styles.metric}
        onMouseEnter={this.onMouseOver}
        onMouseLeave={this.onMouseOver}
      >
        <Title
          metric={metric}
          editing={editing}
          isHovered={isHovered}
          updateMetricName={updateMetricName}
        />
        {editing && <CloseButton onClick={this.onMetricRemove} />}
      </li>
    );
  }
}

Metric.defaultProps = {
  editing: false,
};

export default Metric;
