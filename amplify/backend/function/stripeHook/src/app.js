const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET

var express = require("express")
var bodyParser = require("body-parser")
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware")

var { sendMail } = require("./sendmail")

// declare a new express app
var app = express()

// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
  if (req.originalUrl === "/webhook") {
    next()
  } else {
    bodyParser.json()(req, res, next)
  }
})
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
})

app.post("/webhook", async function (req, res) {
  console.log("Webhook called")
  let event
  try {
    // Check Stripe signature
    const sig = req.headers["stripe-signature"]
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (err) {
    console.error("Contructing Event Error", err.message, err)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }
  console.log("Hook error 3")

  switch (event.type) {
    case "checkout.session.completed":
      console.log(
        `Payment checkout session for ${req.body.data.object.client_reference_id} was successful!`
      )
      sendMail({
        to: "atitsbest.shopping@gmail.com",
        subject: "NextTable - Zahlung erhalten",
        body:
          "+++ TEST this is a test and not real. ignore this email!. TEST +++\r\n\r\nVielen Danke, dass Sie sich für NextTable entschieden haben. Wir haben Ihre Zahlung erhalten.",
      })

      break
    default:
      // Unexpected event type
      return res.status(400).end()
  }

  // Return a response to acknowledge receipt of the event
  res.json({ received: true })
})

app.listen(3000, function () {
  console.log("App started")
})

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
