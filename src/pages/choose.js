import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Swelltext from "../components/swelltext"
import Divider from "../components/divider"

const SecondPage = () => (
  <Layout>
    <SEO title="Choose" />
    <Swelltext
      subheadline="Wie lange ist die Lieferzeit?"
      text="Ihr Tisch wird individuell für Sie hergestellt.Lieferzeit ca. 12 Wochen ab abgeschlossener Bestellabwicklung und nach übermittelter Auftragsbestätigung durch uns. Holz ist ein Naturprodukt - je nach möglicher Rohmaterialbeschaffung kann sich die Lieferzeit auch verändern, wir informieren Sie natürlich umgehend. Aber machen Sie sich keine Sorgen, alles wird gut!"
    />
    <Swelltext
      subheadline="Muss ich den Tisch selber zusammenbauen?"
      text="Nein! Wir liefern Ihnen den Tisch direkt an den Wunschstandort im Gebäude und bauen diesen fix fertig zusammen. Schutzverpackung wird selbstverständlich durch uns entsorgt. Service inklusive!"
    />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
