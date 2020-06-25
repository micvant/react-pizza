import React from 'react';
import CartEmpty from '../components/CartEmpty';
import CartFull from '../components/CartFull';

const Cart = () => {
  const empty = true;
  return (
    <div class="container container--cart">
      {empty && <CartEmpty />}
      {!empty && <CartFull />}
    </div>
  );
};

export default Cart;
