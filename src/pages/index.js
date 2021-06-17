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
import HappyLady from "../components/happylady"

const IndexPage = () => (
  <Layout>
    <SEO title="NExT Table" />
    <Hero>
      <>
        NExT LEVEL - NExT Table - NExT Design.
        <br /> Stilvolles Wohnen mit X
      </>
    </Hero>
    <model-viewer
      src="3dmodels/nexttable.glb"
      shadow-intensity="1"
      ar
      ar-modes="webxr scene-viewer quick-look"
      camera-controls
      alt="A 3D model carousel"
      style={{ width: "100%", height: 400 }}
    ></model-viewer>
    <Swelltext text=" High-end Design trifft Handwerk mit Perfektion. Das Ergebnis: ein einzigartiger Tisch zum Wohnen und Leben. Stilvolles Design für perfekte Augenblicke. " />
    <Explosion />
    <Swelltext text="Ein Tisch gibt einem Wohnraum ein Zentrum; ein Ort, der Treffpunkt und Mittelpunkt ist. Joachim Jungreithmayr hat NExT TABLE genau dafür entwickelt: außergewöhnlich edel im Design, wegweisende Perfektion in der Herstellung. Höchste Ansprüche bis ins Detail." />
    <TheJo />
    <Divider className="visible md:invisible" />
    <Swelltext
      headline="Holz - ein Gefühl fürs Leben"
      text="NExT TABLE, das sind hochwertige Materialien, elegant und unaufdringlich kombiniert. Ein versierter Umgang mit Holz schafft ein neues Form- und Raumgefühl. Ein Tisch, mehr als ein Lebensgefühl in Apfel, Nuss oder Ahorn."
    />
    <AvailableWood />
    <Divider />
    <Contact />
    <Divider className="invisible md:visible" />
    <Megablah />
    <Divider className="invisible md:visible" />
    <HappyLady />
    <Divider />
    <Gotoshop />
  </Layout>
)

export default IndexPage
