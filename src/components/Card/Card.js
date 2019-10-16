import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
      title: PropTypes.string.isRequired,
    };

    render() {
      return (
        <p className={styles.component}>
          {this.props.title}
        </p>
      );
    }
}

export default Card;