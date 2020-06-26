import React from 'react';
import classNames from 'classnames';
// Либа для проверки типов
import PropTypes from 'prop-types';

const PizzaBlock = ({ imageUrl, name, types, sizes, price }) => {
  const [itemActiveSize, setItemActiveSize] = React.useState(0);
  const [itemActiveTypes, setItemActiveTypes] = React.useState(types[0]);
  const typesName = ['Тонкое', 'Традиционное'];
  const availableSizes = [26, 30, 40];

  const setSelectItemTypes = (index) => {
    setItemActiveTypes(index);
  };

  const setSelectItemSize = (index) => {
    setItemActiveSize(index);
  };
  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {typesName.map((el, i) => (
            <li
              onClick={() => setSelectItemTypes(i)}
              // Либа для созданий условий для className
              className={classNames({
                active: itemActiveTypes === i,
                disabled: !types.includes(i),
              })}
              key={`${el}_${i}`}>
              {el}
            </li>
          ))}
        </ul>
        <ul>
          {availableSizes.map((size, i) => (
            <li
              onClick={() => setSelectItemSize(i)}
              className={classNames({
                active: itemActiveSize === i,
                disabled: !sizes.includes(size),
              })}
              key={`sizes_${i}`}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>2</i>
        </div>
      </div>
    </div>
  );
};

// Проверка типов у свойств (Строгая типизация)
PizzaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.number),
  sizes: PropTypes.arrayOf(PropTypes.number),
  price: PropTypes.number,
};
// Подставляет дефолтные свойства в случае отсутствия их в db.json
PizzaBlock.defaultProps = {
  name: '---',
  price: 0,
  imageUrl: '',
  types: [],
  sizes: [],
};
export default PizzaBlock;
