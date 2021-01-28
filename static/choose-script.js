var stripe = Stripe(
  "pk_test_51I8VeODSHHp1KdQDoWy3FciatXXbpbfKaxVX0EHX2gs5TBhKz4w65iSMEIf3b0u63QIVhwVpcpmOLWoQVAl8qSCJ00Yd90NVKL"
)
var DOMAIN = "http://localhost:8000"
var gotoPaymentButton = document.getElementById("gotopayment")

gotoPaymentButton.addEventListener("click", function () {
  createCheckoutSession()
    .then(function (session) {
      window.console.log("Stripe Session", session)
      return stripe.redirectToCheckout({ sessionId: session.id })
    })
    .catch(function (error) {
      alert(
        "Hoppala, das hat was nicht so funktioniert, wie es sollte. Wir kümmern uns darum."
      )
    })
})

function createCheckoutSession() {
  return stripe.checkout.sessions
    .create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "NestTable TEST",
              images: ["https://i.imgur.com/EHyR2nP.png"],
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${DOMAIN}/success`,
      cancel_url: `${DOMAIN}/cancel`,
    })
    .then(function (resp) {
      return resp.json()
    })
}
