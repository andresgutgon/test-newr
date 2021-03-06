import React, { Component } from 'react';

import styles from './styles/index.css';

class Bar extends Component {
  render() {
    const { editing, onToggle } = this.props;
    const btnClass = editing ? styles.buttonActive : styles.button;

    return (
      <div className={styles.bar}>
        <button className={btnClass} onClick={onToggle}>
          {editing && 'Exit edition mode'}
          {!editing && <i className='fa fa-pencil'></i>}
        </button>
        <div className={styles.name}>
          averyverylargemailhere@company.com account of User with a very very large text
        </div>
      </div>
    );
  }
}

Bar.defaultProps = {
  editing: false,
};

export default Bar;
