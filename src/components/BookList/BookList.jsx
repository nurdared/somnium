import React, { Component } from 'react';
import Book from '../Book/Book';

class BookList extends Component {
  render() {
    const books = this.props.bookList.map(book => (
      <Book
        key={book.id}
        name={book.name}
        price={book.price}
        imgSrc={book.imgSrc}
        id={book.id}
        addToCart={this.props.addToCart}
        book={book}
      />
    ));
    return <section className="row">{books}</section>;
  }
}

export default BookList;
