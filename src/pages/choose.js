import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Swelltext from "../components/swelltext"
import Contact from "../components/contact"
import Divider from "../components/divider"
import HappyLady from "../components/happylady"
import Hero from "../components/hero"
import ChooseSize from "../components/choosesize"
import ChooseWood from "../components/choosewood"
import GotoPayment from "../components/gotopayment"

const SecondPage = () => (
  <Layout>
    <SEO title="Choose" />
    <Hero
      text="Choose your size"
      subtitle="Next Level - Next Table - Next Design. Stilvolles Wohnen mit x"
    />
    <ChooseSize />
    <ChooseWood />
    <GotoPayment />
    <HappyLady />
    <Contact />
    <Divider />
    <Swelltext
      subheadline="Wie lange ist die Lieferzeit?"
      text="Ihr Tisch wird individuell für Sie hergestellt.Lieferzeit ca. 12 Wochen ab abgeschlossener Bestellabwicklung und nach übermittelter Auftragsbestätigung durch uns. Holz ist ein Naturprodukt - je nach möglicher Rohmaterialbeschaffung kann sich die Lieferzeit auch verändern, wir informieren Sie natürlich umgehend. Aber machen Sie sich keine Sorgen, alles wird gut!"
    />
    <Swelltext
      subheadline="Muss ich den Tisch selber zusammenbauen?"
      text="Nein! Wir liefern Ihnen den Tisch direkt an den Wunschstandort im Gebäude und bauen diesen fix fertig zusammen. Schutzverpackung wird selbstverständlich durch uns entsorgt. Service inklusive!"
    />
    <br />
    <Divider />
    <div className="flex justify-center">
      <Link to="/" className="button">
        Zurück
      </Link>
    </div>
  </Layout>
)

export default SecondPage
