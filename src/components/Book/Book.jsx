import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super(props);
    this.handleAdding = this.handleAdding.bind(this);
  }

  handleAdding() {
    this.props.addToCart(this.props.book);
  }

  render() {
    const { name, price, imgSrc, book } = this.props;
    return (
      <div className="mb-2 col-3">
        <div className="card mb-4 text-white bg-dark">
          <img
            className="card-img-top"
            style={{ width: "100%" }}
            src={imgSrc}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title" style={{ height: 70 }}>
              {name}
            </h5>
            <button
              value={book}
              onClick={this.handleAdding}
              className="btn btn-success btn-md mt-2"
            >
              <i className="fa fa-shopping-cart"></i> Add to Cart
            </button>
            <h5 className="mt-3 float-right">₽{price}</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Book;
