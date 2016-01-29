import _ from 'underscore';
import React, { Component } from 'react';

import { ENTER_KEY, ESC_KEY } from 'constants';
import MetricTextarea from 'components/MetricTextarea';
import CloseButton from 'components/CloseButton';

import styles from './styles/index.css';
import metric_styles from 'components/Metric/styles/index.css';

class MetricButton extends Component {
  constructor() {
    super();
    this.state = {
      creating_metric: false,
      clean_textarea: false,
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.onKeyDownTextarea = this.onKeyDownTextarea.bind(this);
  }

  onKeyDownTextarea(event) {
    const { createMetric } = this.props;
    const code = event.keyCode;
    const name = event.target.value;

    if (code !== ENTER_KEY && code !== ESC_KEY) return;

    if (code === ENTER_KEY && !_.isEmpty(name)) {
      this.setState({clean_textarea: true});
      createMetric(name);
    }

    if (code === ESC_KEY) {
      this.setState({creating_metric: false});
    }
  }

  onClickButton() {
    this.setState({creating_metric: true});
  }

  onClickClose() {
    this.setState({creating_metric: false});
  }

  renderButton() {
    return (
      <button className={styles.button} onClick={this.onClickButton}>
        <i className={`${styles.icon} fa fa-plus`}></i>
        <span className={styles.buttonText}>Create new metric</span>
      </button>
    );
  }

  renderTextarea() {
    const { clean_textarea } = this.state;

    return (
      <div>
        <MetricTextarea
          onKeyDown={this.onKeyDownTextarea}
          clean={clean_textarea}
          value={''}
        />
        <CloseButton onClick={this.onClickClose} />
      </div>
    );
  }

  render() {
    const { creating_metric } = this.state;

    return (
      <li className={metric_styles.metric}>
        {!creating_metric && this.renderButton()}
        {creating_metric && this.renderTextarea()}
      </li>
    );
  }
}

export default MetricButton;
