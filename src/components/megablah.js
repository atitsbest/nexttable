import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blah from "./blah"
import Blahblah from "./blahblah"
import Divider from "./divider"

const Megablah = () => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "choose_maple.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "holz1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah1: file(relativePath: { eq: "blah1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah2: file(relativePath: { eq: "blah2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah3: file(relativePath: { eq: "blah3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah4: file(relativePath: { eq: "blah4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apple: file(relativePath: { eq: "wood_apple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nut: file(relativePath: { eq: "wood_nut.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maple: file(relativePath: { eq: "wood_maple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      oak: file(relativePath: { eq: "wood_oak.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container mx-auto">
      <Blahblah
        image={data.one.childImageSharp.fluid}
        header="Einzigartiges Design"
        text="Next table ist mehr als nur ein Esstisch und auch mehr als nur Design. Er verbindet Menschen."
      />
      <Divider />
      <Blahblah
        image={data.two.childImageSharp.fluid}
        header="Fortlaufende Holzmaserung"
        text="NExT Table spielt nicht mit Perfektion, er ist perfekt bis ins handwerkliche Detail gearbeitet. Die Maserung des Vollholzes bei der Tischplatte und der Fußkonstruktion sind bewusst quer ausgeführt – das ist außergewöhnlich im Möbel-Massiv-Holzbau. Durch die auf Gehrung zusammengefügten Holzstücke wird ein fortlaufender und stufenloser Übergang ermöglicht."
      />
      <Divider />
      <Blahblah
        image={data.blah3.childImageSharp.fluid}
        header="High-end Tisch-Plattenaufbau"
        text="Die speziell hierfür entwickelte „Sandwichlösung“ aus Holz, ermöglicht eine extrem tragfähige Holzplatte mit weiter und formstabiler Auskragung, ganz ohne störenden Tischzargen."
      />
      <br />
      <Blah
        image={data.apple.childImageSharp.fluid}
        header="Apfel - Das Holz zum Streicheln"
        text="Das Holz des Apfelbaumes besticht durch sein außergewöhnliches Farbspiel. Die Oberfläche ist hart und sehr feinporig. Naturgeölt entfaltet es seine ganze Schönheit und wird haptisch samtig weich. Ein Holz zum Streicheln."
      />
      <br />
      <Blah
        image={data.nut.childImageSharp.fluid}
        header="Nuss - pur Natur"
        text="Das Holz des Nussbaumes ist eines der edelsten heimischen Holzarten. Gleichmäßig und wunderschön in Strukturund Farbe. Wird das Holz angefeuchtet, kann man einen zarten Nussduft wahrnehmen – pure Natur!"
      />
      <br />
      <Blah
        image={data.maple.childImageSharp.fluid}
        header="Ahorn - zart und fein zugleich"
        text="Das Ahornholz ist wunderschön hell, freundlich und mit elegant marmorierter Maserung. Die Oberfläche ist hart und fein zugleich."
      />
      <Divider />
      <Blahblah
        image={data.blah2.childImageSharp.fluid}
        header="Natur pur"
        text="Durch die Vielfalt, die Holz bietet, ist es ideal, um Design und Konstruktion aus einem Werkstoff umzusetzen. Zur Oberflächenbehandlung wird reines Naturöl verwendet, um die samtige Haptik besonders heraus zu arbeiten und um das Holz zu schützen."
      />
      <Divider />
      <Blahblah
        image={data.blah1.childImageSharp.fluid}
        header="Höchste Handwerkskunst"
        text="NExT Table ist ein Designobjekt, das in der Tischlerei der Familie Jungreithmayr Schritt für Schritt ensteht - kompromisslos per Hand in der eigenen Holzwerkstatt. Mehrfache verschränkte Knotenverbindung werden für jeden Tisch individuell gefertigt/hergestellt/produziert."
      />
      <Divider />
      <Blahblah
        image={data.blah4.childImageSharp.fluid}
        header="Faszinierende Fußlösung"
        text="Egal wo oder wie viele Menschen am Tisch Platz nehmen, jeder und jede kommt in den Genuss der Beinfreiheit, mit der Möglichkeit zur gemütlichen Fußablage inklusive. X-fache Verschränkungen zu einem Ganzen."
      />
      <br />
      <Blah
        image={data.oak.childImageSharp.fluid}
        header="Eiche für tragende Aufgaben"
        text="Hart, standfest und äußerst stabil. Perfekt geeignet für tragende Aufgaben. Zeitlos im Erscheinungsbild."
      />
    </div>
  )
}

export default Megablah
