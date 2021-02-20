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
      placeholderImageSm: file(relativePath: { eq: "lady_sm.jpg" }) {
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
      <div className="container mx-auto bg-black relative">
        <Img
          className="hidden md:block"
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
        <Img
          className="block md:hidden"
          fluid={data.placeholderImageSm.childImageSharp.fluid}
        />
        <div className="absolute inset-0 mt-6 ml-6 flex flex-col align-start text-white">
          <h4 className="md:w-5/12 md:text-2xl text-left mb-4">
            "Egal ob in Kunst und Kultur, oder im Sport: mich überzweugen
            Originalität, Kreativität und Leidenschaft für die "großen" und
            "kleinen" Dinge im Leben. Vor allem aber bin ich neugierig auf
            Menschen. NExT Table ist für mich der Tisch, der all das in sich
            vereint."
          </h4>
          <strong className="text-xs" style={{ fontSize: ".875rem" }}>
            Elisabeth Mayr Kern
          </strong>
          <i className="text-xs" style={{ fontSize: ".875rem" }}>
            Kultur- und Kommunikationsexpertin
          </i>
        </div>
      </div>
    </div>
  )
}

export default HappyLady
