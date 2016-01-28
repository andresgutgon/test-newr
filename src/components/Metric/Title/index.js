import React, { Component } from 'react';

import { ENTER_KEY, ESC_KEY } from 'constants';
import MetricTextarea from 'components/MetricTextarea';

import styles from './styles/index.css';

class Title extends Component {
  constructor() {
    super();
    this.state = {
      editing_title: false,
    };

    this.onTitleEdit = this.onTitleEdit.bind(this);
    this.onKeyDownTextarea = this.onKeyDownTextarea.bind(this);
  }

  onTitleEdit() {
    const { editing } = this.props;

    if (!editing) return;

    this.setState({editing_title: true});
  }

  onKeyDownTextarea(event) {
    const { metric: { id }, updateMetricName } = this.props;
    const code = event.keyCode;

    if (code !== ENTER_KEY && code !== ESC_KEY) return;


    if (code === ENTER_KEY) {
      updateMetricName({
        id: id,
        name: event.target.value,
      });
    }

    if (code === ESC_KEY || code === ENTER_KEY) {
      this.setState({editing_title: false});
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.editing) {
      this.setState({editing_title: false});
    }
  }

  renderMetas() {
    const { metric: { metadatas=[]} } = this.props;

    return metadatas.map((meta, index) => (<li key={index}>{meta}</li>));
  }

  renderInfo() {
    const { metric, editing, isHovered } = this.props;
    const { editing_title } = this.state;
    const classTitle = editing ? styles.titleEditing : styles.title;
    const classMetas = isHovered ? styles.metasVisible : styles.metas;

    return (
      <div>
        {!editing_title &&
          <h3 className={classTitle} onClick={this.onTitleEdit}>
            {metric.name}
            {editing && <i className={`fa fa-pencil ${styles.titleEditIcon}`}></i>}
          </h3>
        }
        <ul className={classMetas}>{this.renderMetas()}</ul>
      </div>
    );
  }

  renderTextarea() {
    const { editing_title } = this.state;
    const { metric: { name }} = this.props;

    if (!editing_title) return null;

    return (
      <MetricTextarea
        value={name}
        onKeyDown={this.onKeyDownTextarea}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderTextarea()}
        {this.renderInfo()}
      </div>
    );
  }
}

Title.defaultProps = {
  editing: false,
};

export default Title;
