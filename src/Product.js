import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { products, deleteProduct } = this.props;
    const productLists = products.map(product => {
      return (
        <ul className="product-list" key={product.id}>
          <li>
            <span className="product-name">
              <i className="fa fa-slack" aria-hidden="true" /> {product.name}
            </span>
            <span className="product-price">
              <i className="fa fa-inr" aria-hidden="true" />
              {"  "} {product.price}
            </span>
            <span
              onClick={() => {
                deleteProduct(product.id);
              }}
            >
              X
              {/* to remove automatically invoke of this button we sarround it with arrow function this button will only works when it is clicked */}
            </span>
          </li>
        </ul>
      );
    });
    return <div>{productLists}</div>;
  }
}
