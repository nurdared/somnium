import React, { Component } from 'react';

class ShoppingCartItem extends Component {
  render() {
    const { name, price, imgSrc, id } = this.props;
    return (
      <tr>
        <td>
          <img
            src={imgSrc}
            className="img img-fluid rounded"
            style={{ width: 100 }}
            alt=""
          />
        </td>
        <td className="text-left">{name}</td>
        <td>₽{price}</td>
        <td className="text-center">
          <button
            className="btn btn-danger"
            onClick={() => this.props.handleDeletion(id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  }
}

export default ShoppingCartItem;
