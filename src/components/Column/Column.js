import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
//import { settings } from '../../data/dataStore';
//import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.node,
    icon: PropTypes.node,
  };




  render() {
    const { title, icon, cards } = this.props;

    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon} />
          <Icon name={icon} />
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </div>
        {/*<Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />*/}
      </section>
    );
  }
}

export default Column;
