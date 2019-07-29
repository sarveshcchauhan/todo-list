import React, { Component } from "react";

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: ""
    };
  }
  // to get access of state or props you need to use arrow function
  handle_change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handle_submit = e => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState({
      name: "",
      price: ""
    });
  };
  render() {
    return (
      <div className="box">
        <h2>Add New Items</h2>
        <form onSubmit={this.handle_submit}>
          <div>
            <input
              type="text"
              name="name"
              onChange={this.handle_change}
              value={this.state.name}
              required
            />
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input
              type="number"
              name="price"
              onChange={this.handle_change}
              value={this.state.price}
              required
            />
            <label htmlFor="price">Price</label>
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
