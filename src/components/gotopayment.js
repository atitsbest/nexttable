import React from "react"
import { withPrefix } from "gatsby"
import { API } from "aws-amplify"
import { loadStripe } from "@stripe/stripe-js"

const stripePromise = loadStripe(
  "pk_test_51I8VeODSHHp1KdQDoWy3FciatXXbpbfKaxVX0EHX2gs5TBhKz4w65iSMEIf3b0u63QIVhwVpcpmOLWoQVAl8qSCJ00Yd90NVKL"
)

function GotoPayment({ enabled, size, wood }) {
  const [redirecting, setRedirecting] = React.useState(false)

  const redirectToCheckout = async () => {
    setRedirecting(true)
    try {
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
          zip: "1234",
          country: "Österreich",
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
    } finally {
      setRedirecting(false)
    }
  }

  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <button
        className={`text-xl uppercase border-2 border-black p-2 pl-8 pr-8 
         flex items-center ${
           enabled
             ? "cursor-pointer hover:text-white hover:bg-black"
             : "cursor-not-allowed"
         }
        ${redirecting ? "bg-black text-gray-200" : ""}
         `}
        style={{ fontFamily: "Benton Sans Medium", opacity: enabled ? 1 : 0.5 }}
        onClick={() => (enabled && !redirecting ? redirectToCheckout() : null)}
        disabled={!enabled}
      >
        {redirecting && <Spinner />} <span>Zur Zahlung...</span>
      </button>
    </div>
  )
}

function Spinner() {
  return (
    <svg
      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        class="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  )
}

export default GotoPayment
