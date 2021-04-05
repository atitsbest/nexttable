import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TheJo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
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
    <div className="mt-4">
      <div className="container mx-auto md:bg-gray-200 relative">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        />
        <div className="mx-2 mt-2 md:absolute md:inset-0 md:mt-6 md:ml-6 flex flex-col align-start">
          <p className="text-sm md:text-lg lg:text-xl md:w-7/12 text-left mb-4 mt-2 leading-tight">
            "Für mich ist entscheidend, dass Design mit Wissen und Kompetenz
            umgesetzt wird. Next Table ist deshalb besonders, weil bei diesem
            Tisch alles passt. Perfektes Handwerk macht meinen Next Table zu
            einem Designstück zum Leben."
          </p>
          <strong className="text-sm md:text-lg lg:text-xl block">
            Joachim Jungreithmayr
          </strong>
          <i className="text-xs md:text-sm lg:text-md">
            Architekt mit einer Leidenschaft für Möbel
          </i>
        </div>
      </div>
    </div>
  )
}

export default TheJo
