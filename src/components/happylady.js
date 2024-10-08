import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HappyLady = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lady.jpg" }) {
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
    <div className="md:mt-6">
      <div className="container mx-auto md:bg-black relative">
        <Img
          fluid={data.placeholderImage.childImageSharp.fluid}
          fadeIn
          style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        />
        <div className="mx-2 mt-2 md:absolute md:inset-0 md:mt-6 md:ml-6 flex flex-col align-start md:text-white">
          <p className="text-sm md:text-lg lg:text-xl md:w-5/12 text-left mb-4">
            "Egal ob in Kunst und Kultur, oder im Sport: mich überzeugen
            Originalität, Kreativität und Leidenschaft für die "großen" und
            "kleinen" Dinge im Leben. Vor allem aber bin ich neugierig auf
            Menschen. NExT Table ist für mich der Tisch, der all das in sich
            vereint."
          </p>
          <strong className="text-sm md:text-lg lg:text-xl block">
            Elisabeth Mayr Kern
          </strong>
          <i className="text-xs md:text-sm lg:text-md">
            Kultur- und Kommunikationsexpertin
          </i>
        </div>
      </div>
    </div>
  )
}

export default HappyLady
