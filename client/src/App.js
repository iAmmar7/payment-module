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
          price: 100.67,
          description: "Sample Product 1"
        },
        {
          name: "Product 2",
          price: 120.14,
          description: "Sample Product 2"
        },
        {
          name: "Product 3",
          price: 150.55,
          description: "Sample Product 3"
        },
        {
          name: "Product 4",
          price: 400.34,
          description: "Sample Product 4"
        },
        {
          name: "Product 5",
          price: 600.34,
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

// function App() {
//   const [product] = React.useState({
//     name: "Tesla Roadster",
//     price: 64998.67,
//     description: "Cool car"
//   });

//   async function handleToken(token, addresses) {
//     const response = await axios.post(
//       "/checkout",
//       { token, product }
//     );
//     console.log("Response:", response);

//     const { status } = response.data;
//     if (status === "success") {
//       toast("Success! Check email for details", { type: "success" });
//     } else {
//       toast("Something went wrong", { type: "error" });
//     }
//   }

//   return (
//     <div className="container">
//       <div className="product">
//         <h1>{product.name}</h1>
//         <h3>On Sale · ${product.price}</h3>
//       </div>
//       <StripeCheckout
//         stripeKey="pk_test_rfd3VcwMOkTLRKTflveHdIfg00dYj8zDDC"
//         token={handleToken}
//         amount={product.price * 100}
//         name="Tesla Roadster"
//         billingAddress
//         shippingAddress
//       />
//     </div>
//   );
// }

export default App;
