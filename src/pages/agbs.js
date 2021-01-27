import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Swelltext from "../components/swelltext"
import Divider from "../components/divider"

const SecondPage = () => (
  <Layout>
    <SEO title="AGBs" />
    <Swelltext headline="AGBs" text="lorem" />
    <Divider />
    <Link to="/" className="button">
      Zurück
    </Link>
  </Layout>
)

export default SecondPage
