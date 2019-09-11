import React, { Component } from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.data
    }

    this.handleToken = this.handleToken.bind(this);
  }

  async handleToken(token, addresses) {
    const { product } = this.state;

    const response = await axios.post(
      "/checkout",
      { token, product }
    );
    console.log("Response:", response);

    const { status } = response.data;
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  render() {
    const { product } = this.state;

    return (
      <div className="col-lg-4 col-md-6 text-center">
        <div className="card bg-dark m-3">
          <div className="card-header bg-transparent text-white text-center h4 border-white">{product.name}</div>
          <div className="card-body text-white">
            <h5 className="card-title">Price ${product.price}</h5>
            <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="card-footer bg-transparent border-white text-center">
            <StripeCheckout
              stripeKey="pk_test_rfd3VcwMOkTLRKTflveHdIfg00dYj8zDDC"
              token={this.handleToken}
              amount={product.price * 100}
              name={product.name}
              billingAddress
              shippingAddress
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Product;