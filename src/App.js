import React, { Component } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import "./components/css/products.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Cheese", price: "250" },
        { id: 2, name: "Pizza Dough", price: "350" },
        { id: 3, name: "Pepsi", price: "120" },
        { id: 4, name: "Wheat 10.9KG", price: "9000" }
      ]
    };
  }

  addProduct = product => {
    console.log(product);
    product.id = Math.random();
    let newProduct = [...this.state.products, product];
    this.setState({
      products: newProduct
    });
  };

  deleteProduct = id => {
    //we will filter through the id and fetch those products whose id is in products and display
    let products = this.state.products.filter(product => {
      return product.id !== id;
    });
    this.setState({
      products
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center">ToDo Lists</h1>
          <div className="list-box">
        <Product className="list-box"
          deleteProduct={this.deleteProduct}
          products={this.state.products}
        />
        </div>
        {/* To get details of products and to enable the handle click pass the attribute  */}
        <AddProduct addProduct={this.addProduct} />
        {/* This will add the functionality of adding the product */}
      </div>
    );
  }
}
