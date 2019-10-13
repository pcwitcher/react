import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: proTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };

  render() {
    return (
      <div id="app">
        <section className={styles.component}>
          <Hero titleText={this.props.title} />
          <Hero image={this.props.image} />
          <div className={styles.description}>{this.props.children}</div>
        </section>
        <div className={styles.component}>
          <Column />
        </div>
      </div>
    );
  }
}

export default List;
