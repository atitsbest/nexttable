import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Gotoshop from "../components/gotoshop"
import Explosion from "../components/explosion"
import Divider from "../components/divider"
import Swelltext from "../components/swelltext"
import TheJo from "../components/thejo"
import AvailableWood from "../components/availablewood"
import Contact from "../components/contact"
import Megablah from "../components/megablah"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero text="NEXT LEVEL -	NEXT TABLE -NEXT DESIGN. STILVOLLES WOHNEN MIT X" />
    <Gotoshop />
    <Explosion />
    <Divider />
    <Swelltext text="Ein Tisch gibt einem Wohnraum ein Zentrum; ein Ort, der Treffpunkt und Mittelpunkt ist. Joachim Jungreithmayr hat Next Table genau dafür entwickelt : außergewöhnlich edel im Design, wegweisende Perfektion in der Herstellung. Höchste Ansprüche bis ins Detail." />
    <TheJo />
    <Swelltext
      headline="Holz - ein Gefühl fürs Leben"
      text="Next Table, das sind hochwertige Materialien, elegant und unaufdringlich kombiniert. Ein versierter Umgang mit Holz schafft ein neues Form- und Raumgefühl. Ein Tisch, mehr als ein Lebensgefühl in Apfel, Nuss oder Ahorn."
    />
    <AvailableWood />
    <Divider />
    <Contact />
    <Divider />
    <Megablah />
  </Layout>
)

export default IndexPage
