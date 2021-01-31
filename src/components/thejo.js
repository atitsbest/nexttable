import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TheJo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <div className="mt-12">
      <div className="container mx-auto bg-gray-200 relative">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div className="absolute inset-0 mt-6 ml-6 flex flex-col align-start max-w-xs">
          <h4 className="mb-4 text-left" style={{ fontSize: "1.125rem" }}>
            "Für mich ist entscheidend, dass Design mit Wissen und Kompetenz
            umgesetzt wird. Next Table ist deshalb besonders, weil bei diesem
            Tisch alles passt. Perfektes Hand-werk macht meinen Next Table zu
            einem Designstück zum Leben."
          </h4>
          <strong className="text-lg block" style={{ fontSize: ".875rem" }}>
            Joachim Jungreithmayr
          </strong>
          <i className="text-xs" style={{ fontSize: ".875rem" }}>
            Architeckt mit einer Leidenschaft für Möbel
          </i>
        </div>
      </div>
    </div>
  )
}

export default TheJo
