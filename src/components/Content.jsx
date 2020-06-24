import React from 'react';
import { SortPopup, PizzaBlock, Categories } from './index';

const Content = (props) => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories
            items={['Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}></Categories>
          <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
          <PizzaBlock></PizzaBlock>
        </div>
      </div>
    </div>
  );
};

export default Content;
