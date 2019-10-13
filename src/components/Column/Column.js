import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: proTypes.string,
    children: PropTypes.node
  };

  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <h3 className={styles.title}></h3>
        </section>
      </div>
    );
  }
}

export default Column;
