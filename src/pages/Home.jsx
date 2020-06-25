import React from 'react';
import { SortPopup, PizzaBlock, Categories } from '../components';

const Home = (props) => {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Мясная', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}></Categories>
        <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock
          name="Карбонара"
          path="https://cdn.dodostatic.net/static/Img/Products/1e414bf6663645f592d166329e1fec83_292x292.jpeg"
          price="395"
        />
        <PizzaBlock
          name="Деревенская"
          path="https://cdn.dodostatic.net/static/Img/Products/04dff3cf16144112aabdd5f79182f663_292x292.jpeg"
          price="395"
        />
        <PizzaBlock
          name="Чизбургер-пицца"
          path="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/c7dae007-a646-49da-9240-d0d164be662c.jpg"
          price="395"
        />
        <PizzaBlock
          name="Сырная"
          path="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/c2da53ec-00e2-4446-a4e6-74b83ed0b357.jpg"
          price="245"
        />
        <PizzaBlock
          name="Ветчина и сыр"
          path="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dd59dcd5-cbf7-44e9-a5bd-1654ef06e6a3.jpg"
          price="295"
        />
        <PizzaBlock
          name="Кисло-сладкий цыпленок"
          path="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/dcc14f3c-0bcd-4e22-9c94-d694750a790b.jpg"
          price="295"
        />
        <PizzaBlock
          name="Ветчина и грибы"
          path="https://cdn.dodostatic.net/static/Img/Products/b1ffa66f2ebb4e959122e54eaa071109_292x292.jpeg"
          price="345"
        />
        <PizzaBlock
          name="Пепперони"
          path="https://cdn.dodostatic.net/static/Img/Products/Pizza/ru-RU/4df905b0-0a43-4e95-a096-8e470918a267.jpg"
          price="395"
        />
      </div>
    </div>
  );
};

export default Home;
