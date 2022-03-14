import React from 'react';
import book from 'pictures/book.png';
import s from './styles.module.css';

const HomeView = () => (
  <div className={s.container}>
    <img src={book} alt="" width="200" />
    <h1 className={s.title}>
      If for some reason in the 21st century you need a phone book, then you are
      weird. Anyway, this website is for you.
    </h1>
  </div>
);

export default HomeView;
