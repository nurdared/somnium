import React, { Component, Fragment } from "react";
import "./App.css";
import BookList from "../BookList/BookList";
import SearchBar from "../SearchBar/SearchBar";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Scroll from "./Scroll";
import ShoppingCartItems from "../ShoppingCartItems/ShoppingCartItems";

class App extends Component {
  constructor(props) {
    super(props);
    this.searchBook = this.searchBook.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.toggle = this.toggle.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
    this.state = {
      bookList: [],
      cartItems: [],
      searchField: "",
      toggleStatus: true
    };
  }

  searchBook(event) {
    this.setState({ searchField: event.target.value });
  }

  addToCart(book) {
    const cartItems = this.state.cartItems;
    cartItems.push(book);
    this.setState({ cartItems: cartItems });
  }

  deleteFromCart(bookId) {
    const updatedBooks = this.state.cartItems.filter(
      deletingBook => deletingBook.id !== bookId
    );
    this.setState({ cartItems: updatedBooks });
  }

  toggle() {
    this.setState({ toggleStatus: !this.state.toggleStatus });
  }

  renderButton(status) {
    if (status) {
      return (
        <ShoppingCart
          books={this.state.cartItems}
          toggleStatus={this.toggleStatus}
          onToggle={this.toggle}
        />
      );
    }

    return (
      <button onClick={this.toggle} className="btn btn-dark">
        <i className="fa fa-home"></i> Home
      </button>
    );
  }

  render() {
    const { bookList, searchField, cartItems } = this.state;
    const filteredBookList = bookList.filter(book => {
      return book.name.toLowerCase().includes(searchField.toLowerCase());
    });
    const filteredCartList = cartItems.filter(book => {
      return book.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <Fragment>
        <header className="container">
          <div className="row mt-2">
            <div className="col-4">
              <SearchBar searchBook={this.searchBook} />
            </div>
            <div className="col-8 text-right">
              {this.renderButton(this.state.toggleStatus)}
            </div>
          </div>
          <hr />
        </header>
        <main className="container">
          <Scroll>
            {this.state.toggleStatus ? (
              !bookList.length ? (
                <h1>Loading...</h1>
              ) : (
                <BookList
                  bookList={filteredBookList}
                  addToCart={this.addToCart}
                />
              )
            ) : (
              <ShoppingCartItems
                books={filteredCartList}
                handleDeletion={this.deleteFromCart}
              />
            )}
          </Scroll>
        </main>
      </Fragment>
    );
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/95s16")
      .then(response => response.json())
      .then(books => this.setState({ bookList: books }));
  }
}

export default App;
