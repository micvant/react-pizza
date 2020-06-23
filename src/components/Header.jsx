import React from 'react';
import Button from './Button';
import logo from '../assets/img/pizza-logo.svg';

const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logo} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </div>
        <div className="header__cart">
          <Button text="520 Р" quantity="3"></Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
