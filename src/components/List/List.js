import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: ProTypes.string.isRequired,
    children: PropTypes.node
  };

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };

  render() {
    return (
        <section className={styles.component}>
          <Hero titleText={this.props.title} imageURL={this.props.image}/>
          <div className={styles.description}>{this.props.children}</div>
          <div className={styles.columns}>
            <Column title="Column one"/>
            <Column title="Column two"/>
            <Column title="Column three"/>
          </div>
        </section>
    );
  }
}

export default List;
