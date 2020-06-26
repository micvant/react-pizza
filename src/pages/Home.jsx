import React from 'react';
import { SortPopup, PizzaBlock, Categories } from '../components';

const Home = ({ items }) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}></Categories>
        <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {/* Проверка существует ли массив items */}
        {items && items.map((obj, index) => <PizzaBlock key={`${obj.item}_${index}`} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
