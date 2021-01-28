import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Divider from "../components/divider"
import "../styles/legal.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Impressum" />
    <Divider />
    <div className="m-4 legal">
      <h1>Impressum</h1>
      <p>
        Tischlerei Jungreithmayr
        <br />
        <br />
        Tischlerstrasse 6<br />A - 4062 Kirchberg-Thening
        <br />
        <br />
        Tel.:0043 7221 63 0 16
        <br />
        Fax.:0043 7221 63 0 61
        <br />
        <br />
        tischler@thening.at
        <br />
        <br />
        ATU 22634102
      </p>
    </div>
    <Divider />
    <Link to="/" className="button">
      Zurück
    </Link>
    <Link to="/datenschutz" className="button">
      Datenschutz
    </Link>
  </Layout>
)

export default SecondPage
