import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blah from "./blah"
import Blahblah from "./blahblah"
import Divider from "./divider"

const Megablah = () => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "xtable.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "holz1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah1: file(relativePath: { eq: "blah1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah2: file(relativePath: { eq: "blah2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah3: file(relativePath: { eq: "blah3.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah4: file(relativePath: { eq: "blah4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      apple: file(relativePath: { eq: "wood_apple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nut: file(relativePath: { eq: "wood_nut.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      maple: file(relativePath: { eq: "wood_maple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Blahblah
        image={data.one.childImageSharp.fluid}
        header="Einzigartiges Design"
        text="Next table ist mehr als nur ein Esstisch und auch mehr als nur Design. Er verbindet Menschen."
      />
      <Divider />
      <Blahblah
        image={data.two.childImageSharp.fluid}
        header="Fortlaufende Holzmaserung"
        text="Die Maserung des Vollholzes bei Tischplatte und Fußkonstruktion sind bewusst quer ausgeführt – außergewöhnlich im Möbel-Massiv-Holzbau. Durch die auf Gehrung zusammengefügten Holzstücke wird ein fortlaufender und stufenloser Übergang ermöglicht."
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
        header="Apfelbaum"
        text="Das Holz des Apfelbaumes besticht durch sein außergewöhnliches Farbspiel. Die Oberfläche ist hart und sehr feinporig. Naturgeölt entfaltet es seine ganze Schönheit und wird haptisch samtig weich. Ein Holz zum Streicheln."
      />
      <br />
      <Blah
        image={data.nut.childImageSharp.fluid}
        header="Nussbaum"
        text="Das Holz des Nussbaumes ist eines der edelsten heimischen Holzarten. Gleichmäßig und wunderschön in Strukturund Farbe. Beim Anfeuchten wird Ihnen jedes Mal ein zarter Nussduft in die Nase strömen– pure Natur!"
      />
      <br />
      <Blah
        image={data.maple.childImageSharp.fluid}
        header="Ahorn"
        text="Das Ahornholz ist wunderschön hell, freundlich und mit elegant marmorierter Maserung. Die Oberfläche ist hart und fein zugleich."
      />
      <Divider />
      <Blahblah
        image={data.blah2.childImageSharp.fluid}
        header="Natur pur"
        text="Durch die Vielfältigkeit, die Holz bietet, kann man Design und Konstruktion aus diesem einen Werkstoff verwirklichen. Zur Oberflächenbehandlung wird reines Naturöl verwendet, um die samtige Haptik besonders heraus zu arbeiten und um das Holz zu schützen."
      />
      <Divider />
      <Blahblah
        image={data.blah1.childImageSharp.fluid}
        header="Höchste Handwerkskunst"
        text="Virtuelles Designobjekt wird zum Leben erweckt – kompromisslos per Hand in der eigenen Holzwerkstatt. Mehrfache verschränkte Knotenverbindung werden für jeden Tisch individuell gefertigt/hergestellt/produziert."
      />
      <Divider />
      <Blahblah
        image={data.blah4.childImageSharp.fluid}
        header="Faszinierende Fußlösung"
        text="Egal wo oder wie viele Platz nehmen, jeder kommt in den Genuss der Beinfreiheit, Möglichkeit zur gemütlichen Fußablage inklusive. X-fache Verschränkungen zu einem Ganzen."
      />
      <br />
      <Blah
        image={data.two.childImageSharp.fluid}
        header="Faszinierende Fußlösung"
        text="Egal wo oder wie viele Platz nehmen, jeder kommt in den Genuss der Beinfreiheit, Möglichkeit zur gemütlichen Fußablage inklusive. X-fache Verschränkungen zu einem Ganzen."
      />
    </>
  )
}

export default Megablah
