import React from 'react';

const styles = {
  title: {
    display: 'block',
    marginLeft: '50px',
    marginRight: '50px',
    fontWeight: 500,
    fontSize: 35,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div>
    <h1 style={styles.title}>
      If for some reason in the 21st century you suddenly needed a phone book,
      then you are strange. Anyway, this website is for you.
    </h1>
  </div>
);

export default HomeView;
