import React, { Component } from "react";
import { toast } from "react-toastify";

import Product from "./Product";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: "Product 1",
          price: 100.0,
          description: "Sample Product 1"
        },
        {
          name: "Product 2",
          price: 120.0,
          description: "Sample Product 2"
        },
        {
          name: "Product 3",
          price: 150.0,
          description: "Sample Product 3"
        },
        {
          name: "Product 4",
          price: 400.0,
          description: "Sample Product 4"
        },
        {
          name: "Product 5",
          price: 600.0,
          description: "Sample Product 5"
        },
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="card-group mt-5">
          <Product data={this.state.products[0]} />
          <Product data={this.state.products[1]} />
          <Product data={this.state.products[2]} />
          <Product data={this.state.products[3]} />
          <Product data={this.state.products[4]} />
        </div>
      </div>
    )
  }
}

export default App;
