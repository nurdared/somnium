import React from 'react';

const ShoppingCart = ({ books, onToggle }) => {
  return (
    <button onClick={onToggle} className="btn btn-dark">
      <i className="fa fa-shopping-cart"></i> Shopping Cart &nbsp;
      <span className="badge badge-light">{books.length}</span>
    </button>
  );
};

export default ShoppingCart;
