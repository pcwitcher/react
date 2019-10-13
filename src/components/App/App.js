import React from 'react';
import styles from './App.scss';
import List from '../List/List';

class App extends React.Component {
  render() {
    return (
      <div id="app">
        <main className={styles.component}>
          <h1 className={styles.title}> My first React app </h1>
          <h2 className={styles.subtitle}> Hello World! </h2>
          <List title={['Things to do ', <sup>soon!</sup>]}></List>
          <List>
            {
              <img
                src={require('http://uploads.kodilla.com/bootcamp/fer/11.react/space.png')}
                alt="rocket on sky"
              />
            }
          </List>
        </main>
      </div>
    );
  }
}

export default App;
