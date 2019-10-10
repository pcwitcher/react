import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';

class List extends React.Component {
  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <Hero />>
        </section>
      </div>
    );
  }
}

export default List;
