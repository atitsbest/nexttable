import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Gotoshop from "../components/gotoshop"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero text="NEXT LEVEL -	NEXT TABLE -NEXT DESIGN. STILVOLLESWOHNEN MIT X" />
    <Gotoshop />
    <Link to="/choose/">Go to page 2</Link> <br />
  </Layout>
)

export default IndexPage
