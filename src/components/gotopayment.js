import React from "react"
import { withPrefix } from "gatsby"
import { API } from "aws-amplify"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51I8VeODSHHp1KdQDoWy3FciatXXbpbfKaxVX0EHX2gs5TBhKz4w65iSMEIf3b0u63QIVhwVpcpmOLWoQVAl8qSCJ00Yd90NVKL"
)

function GotoPayment({ enabled, size, wood }) {
  window.console.log(size, wood)
  const redirectToCheckout = async () => {
    const fetchSession = async () => {
      const apiName = "stripeAPI"
      const apiEndpoint = "/checkout"
      const body = {
        quantity: 1,
        client_reference_id: "UniqueString",
        dimension: `${size.length} x ${size.width}`,
        price: size.price * 100, // in cents
        wood: wood.name,
        imageUrl: `${window.location.origin}${withPrefix(
          `/products/${wood.image}_${size.length}.png`
        )}`,
        email: "test@test.test",
        street: "Adresse 1",
        city: "Stadt",
        zip: "PLZ",
        country: "Land",
      }
      const session = await API.post(apiName, apiEndpoint, { body })
      return session
    }

    const session = await fetchSession()
    if (session.statusCode != null && session.statusCode !== 200) {
      alert(
        "Ups, da ist uns ein Fehler passiert. Wir kümmern uns gleich darum."
      )
    } else {
      const sessionId = session.id
      const stripe = await stripePromise
      stripe.redirectToCheckout({ sessionId })
    }
  }

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <button
        className={`text-xl uppercase border-2 border-black p-2 pl-8 pr-8 ${
          enabled
            ? "cursor-pointer hover:text-white hover:bg-black"
            : "cursor-not-allowed"
        } flex items-center`}
        style={{ fontFamily: "Benton Sans Medium", opacity: enabled ? 1 : 0.5 }}
        onClick={() => (enabled ? redirectToCheckout() : null)}
        disabled={!enabled}
      >
        Weiter...
      </button>
    </div>
  )
}

export default GotoPayment
