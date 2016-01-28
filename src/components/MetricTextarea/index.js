import React, { Component } from 'react';
import TextareaAutoSize from 'react-textarea-autosize';


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

    if (value) {
      this.setState({value: `${value} `});
      const cursorPosition = this.refs.textareaComponent.value.length;

      this.refs.textareaComponent.selectionStart = cursorPosition;
    }

    this.refs.textareaComponent.focus();
  }

  componentWillReceiveProps(newProps) {
    const { clean } = newProps;

    if (clean) {
      this.setState({value: ''});
    }
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { value } = this.state;

    return (
        <div className={styles.textareaWrapper}>
        <TextareaAutoSize
          placeholder='Write metric name'
          onKeyDown={this.onKeyDown}
          value={value}
          ref='textareaComponent'
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MetricTextarea;
