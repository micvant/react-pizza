import React from 'react';
import PizzaBlock from './PizzaBlock';
import Categories from './Categories';
import Sort from './Sort';

const Content = (props) => {
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories></Categories>
          <Sort></Sort>
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
