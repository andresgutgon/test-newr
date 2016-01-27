import React, { Component } from 'react';

import CloseButton from '../CloseButton';

import styles from './styles/index.css';

class MetricTextarea extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  onKeyDown(event) {
    const { onKeyDown } = this.props;

    if (!onKeyDown) return;

    onKeyDown(event);
  }
  componentDidMount() {
    const { value } = this.props;
    this.setState({value: `${value} `});
    const cursorPosition = this.refs.textareaComponent.value.length;

    this.refs.textareaComponent.selectionStart = cursorPosition;
    this.refs.textareaComponent.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { simple, showButton = false } = this.props;
    const { value } = this.state;
    const className = simple ? styles.textareaWrapper : styles.textareaWrapperStyled;

    return (
      <div className={className}>
        <textarea
          rows={1}
          placeholder='Write metric name'
          onKeyDown={this.onKeyDown}
          value={value}
          ref='textareaComponent'
          onChange={this.handleChange}
        />
        {showButton && <CloseButton />}
      </div>
    );
  }
}

export default MetricTextarea;
