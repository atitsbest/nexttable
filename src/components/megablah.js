import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Blahblah from "./blahblah"
import Divider from "./divider"

const Megablah = () => {
  const data = useStaticQuery(graphql`
    query {
      one: file(relativePath: { eq: "einzigartiges_design.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      two: file(relativePath: { eq: "maserung.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah1: file(relativePath: { eq: "handwerkskunst.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah2: file(relativePath: { eq: "wood_apple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      highendplatte: file(relativePath: { eq: "highendplatte.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      blah4: file(relativePath: { eq: "fussloesung.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <Blahblah
          image={data.one.childImageSharp.fluid}
          header="Einzigartiges Design"
          text="NExT TABLE ist mehr als nur ein Esstisch und auch mehr als nur Design. Er verbindet Menschen."
        />
        <Blahblah
          image={data.two.childImageSharp.fluid}
          header="Fortlaufende Holzmaserung"
          text="NExT TABLE spielt nicht mit Perfektion, er ist perfekt bis ins handwerkliche Detail gearbeitet. Die Maserung des Vollholzes bei der Tischplatte und der Fußkonstruktion sind bewusst quer ausgeführt – das ist außergewöhnlich im Möbel-Massiv-Holzbau. Durch die auf Gehrung zusammengefügten Holzstücke wird ein fortlaufender und stufenloser Übergang ermöglicht."
        />
        <Blahblah
          image={data.highendplatte.childImageSharp.fluid}
          header="High-end Tisch-Plattenaufbau"
          text="Die speziell hierfür entwickelte „Sandwichlösung“ aus Holz, ermöglicht eine extrem tragfähige Holzplatte mit weiter und formstabiler Auskragung, ganz ohne störenden Tischzargen."
        />
      </div>
      <Divider className="invisible md:visible md:py-2" />
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <Blahblah
          image={data.blah2.childImageSharp.fluid}
          header="Natur pur"
          text="Durch die Vielfalt, die Holz bietet, ist es ideal, um Design und Konstruktion aus einem Werkstoff umzusetzen. Zur Oberflächenbehandlung wird reines Naturöl verwendet, um die samtige Haptik besonders heraus zu arbeiten und um das Holz zu schützen."
        />
        <Blahblah
          image={data.blah1.childImageSharp.fluid}
          header="Höchste Handwerkskunst"
          text="NExT TABLE ist ein Designobjekt, das in der Tischlerei der Familie Jungreithmayr Schritt für Schritt ensteht - kompromisslos per Hand in der eigenen Holzwerkstatt. Mehrfache verschränkte Knotenverbindung werden für jeden Tisch individuell gefertigt/hergestellt/produziert."
        />
        <Blahblah
          image={data.blah4.childImageSharp.fluid}
          header="Faszinierende Fußlösung"
          text="Egal wo oder wie viele Menschen am Tisch Platz nehmen, jeder und jede kommt in den Genuss der Beinfreiheit, mit der Möglichkeit zur gemütlichen Fußablage inklusive. X-fache Verschränkungen zu einem Ganzen."
        />
      </div>
    </>
  )
}

export default Megablah
