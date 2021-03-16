import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider"

const Success = () => (
  <Layout>
    <SEO title="Success" />
    <Divider />
    <h1 className="text-xl md:text-2xl lg:text-3xl">
      Vielen Dank für Ihren Einkauf.
    </h1>
    <Divider />
    <Link to="/" className="button">
      Zurück
    </Link>
  </Layout>
)

export default Success
