const express = require('express');
const bodyParser = require('body-parser');

const key = require('./config/keys').secretKey;

const stripe = require('stripe')(key);

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Testing Route")
})

app.post('/checkout', async (req, res) => {
  console.log("Request: " + req.body);

  let error, status;

  try {
    const { product, token } = req.body;

    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id
    });

    const charge = await stripe.charges.create({
      amount: product.price * 100,
      currency: "usd",
      receipt_email: token.email,
      description: `Purchased product is ${product.name}`,
      shipping: {
        name: token.card.name,
        address: {
          line1: token.card.address_line1,
          line2: token.card.address_line2,
          city: token.card.address_city,
          postal_code: token.card.address_zip
        }
      }
    });
    console.log("Charge: " + { charge });
    status = "Success";
  }
  catch (err) {
    console.log("Checkout error: " + err);
    status = "Failure"
  }

  res.json({ error, status });

})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));