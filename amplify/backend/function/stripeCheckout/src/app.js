const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const baseUrl = process.env.NEXTTABLE_URL

var express = require("express")
var bodyParser = require("body-parser")
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware")

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.post("/checkout", async function (req, res) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: req.body.email,
      metadata: {
        city: req.body.city,
        country: req.body.country,
        line1: req.body.street,
        postal_code: req.body.zip,
        email: req.body.email,
      },
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: `Next Table ${req.body.dimension} in ${req.body.wood}`,
              images: [req.body.imageUrl],
            },
            unit_amount: req.body.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`, // The URL the customer will be directed to after the payment or subscription creation is successful.
      cancel_url: `${baseUrl}/choose`, // The URL the customer will be directed to if they decide to cancel payment and return to your website.
    })
    res.json(session)
  } catch (err) {
    res.json(err)
  }
})

app.listen(3000, function () {
  console.log("App started")
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
