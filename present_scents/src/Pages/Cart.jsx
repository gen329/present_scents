import React, { Component } from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, onEmptyCart }) => {

  const handleEmptyCart = () => {
    onEmptyCart();
  }

  const renderEmptyMessage = () => {
    if (cart.total_unique_items > 0) {
      return;
    }

    return (
      <p className="cart__none">
        You have no items in your shopping cart, start adding some!
      </p>
    );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (
      <CartItem
        item={lineItem}
        key={lineItem.id}
        className="cart__inner"
      />
    ))
  );

  const renderTotal = () => (
    <div className="cart__total">
      <p className="cart__total-title">Subtotal:</p>
      <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
    </div>
  );

  return (
    <div className="cart">
      <h4 className="cart__heading">Your Shopping Cart</h4>
      { renderEmptyMessage() }
      { renderItems() }
      { renderTotal() }
      <div className="cart__footer">
        <button className="cart__btn-empty">Empty cart</button>
        <button className="cart__btn-checkout">Checkout</button> 
      </div>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.shape({
    total_unique_items: PropTypes.number,
    line_items: PropTypes.arrayOf(PropTypes.object),
    subtotal: PropTypes.shape({
      formatted_with_symbol: PropTypes.string,
    })
  }).isRequired,
  onEmptyCart: PropTypes.func.isRequired,
};


export default Cart;