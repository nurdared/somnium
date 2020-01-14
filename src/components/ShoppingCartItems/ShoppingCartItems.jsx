import React, { Component } from 'react';
import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

class ShoppingCartItems extends Component {
  constructor(props) {
    super(props);
    this.renderCartItems = this.renderCartItems.bind(this);
  }

  calculateTotal(books) {
    return books.reduce((sum, current) => sum + current.price, 0);
  }

  renderCartItems() {
    return this.props.books.map(book => (
      <ShoppingCartItem
        key={book.id}
        name={book.name}
        price={book.price}
        imgSrc={book.imgSrc}
        id={book.id}
        handleDeletion={this.props.handleDeletion}
      />
    ));
  }

  render() {
    return (
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th className="h5">Cover</th>
            <th className="h5">Book Title</th>
            <th className="h5">Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{this.renderCartItems()}</tbody>
        <tfoot>
          <tr>
            <td colSpan="2" className="text-right font-weight-bold h5">
              Total:
            </td>
            <td colSpan="2" className=" font-weight-bold h5">
              ₽{this.calculateTotal(this.props.books)}
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default ShoppingCartItems;
