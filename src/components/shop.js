import React from "react"
import ChooseSize from "./choosesize"
import ChooseWood from "./choosewood"
import GotoPayment from "./gotopayment"
import CustomerAddress from "./customeraddress"
import { useFormik } from "formik"
import * as Yup from "yup"
import { loadStripe } from "@stripe/stripe-js"
import { withPrefix } from "gatsby"
import { API } from "aws-amplify"

const stripePromise = loadStripe(
  "pk_test_51I8VeODSHHp1KdQDoWy3FciatXXbpbfKaxVX0EHX2gs5TBhKz4w65iSMEIf3b0u63QIVhwVpcpmOLWoQVAl8qSCJ00Yd90NVKL"
)

const sizes = [
  { length: 180, width: 120, price: 13900 },
  { length: 220, width: 120, price: 14900 },
  { length: 250, width: 120, price: 16900 },
]

const woods = [
  { name: "Apfelbaum", image: "apple" },
  { name: "Nussbaum", image: "nut" },
  { name: "Ahorn", image: "maple" },
]

const Shop = () => {
  const [size, setSize] = React.useState()
  const [wood, setWood] = React.useState()

  const [canGotoPayment, setCanGotoPayment] = React.useState(false)
  const [redirecting, setRedirecting] = React.useState(false)

  const formik = useFormik({
    initialValues: {
      email: "",
      street: "",
      zip: "",
      city: "",
      country: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ungültige E-Mail-Adresse")
        .required("Bitte angeben"),
      street: Yup.string().required("Bitte ausfüllen"),
      zip: Yup.string().required("Bitte ausfüllen"),
      city: Yup.string().required("Bitte ausfüllen"),
    }),
  })

  React.useEffect(() => {
    setCanGotoPayment(size != null && wood != null)
  }, [size, wood])

  const redirectToCheckout = async () => {
    setRedirecting(true)
    try {
      const fetchSession = async () => {
        const apiName = "stripeAPI"
        const apiEndpoint = "/checkout"
        const body = {
          quantity: 1,
          client_reference_id: "UniqueString",
          dimension: `${sizes[size].length} x ${sizes[size].width}`,
          price: sizes[size].price * 100, // in cents
          wood: woods[wood].name,
          imageUrl: `${window.location.origin}${withPrefix(
            `/products/${woods[wood].image}_${sizes[size].length}.png`
          )}`,
          email: formik.values.email,
          street: formik.values.street,
          city: formik.values.city,
          zip: formik.values.zip,
          country: formik.values.country,
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

  function handleGotoPaymentClick() {
    redirectToCheckout()
  }

  return (
    <>
      <pre>{formik.isValid}</pre>
      <ChooseSize sizes={sizes} value={size} onChange={setSize} />
      <ChooseWood woods={woods} value={wood} onChange={setWood} />
      <form onSubmit={formik.handleSubmit}>
        <CustomerAddress {...formik} />
        <GotoPayment
          enabled={canGotoPayment && formik.isValid}
          loading={redirecting}
          onClick={handleGotoPaymentClick}
        />
      </form>
    </>
  )
}

Shop.propTypes = {}

Shop.defaultProps = {}

export default Shop
