import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider"

const Success = () => (
  <Layout>
    <SEO title="Cancel" />
    <Divider />
    <h1 className="text-3xl">Es ist ok, wenn Sie sich anders entscheiden.</h1>
    <Divider />
    <Link to="/" className="button">
      Zurück zum Start
    </Link>
  </Layout>
)

export default Success
