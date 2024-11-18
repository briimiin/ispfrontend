import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? <p>No items in cart</p> : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: {totalPrice}</h3>
          <Link to="/payment">
            <button>Proceed to Payment</button>
          </Link>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
