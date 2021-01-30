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
    <div className="mt-12">
      <div className="container mx-auto bg-black relative">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div className="absolute inset-0 mt-6 ml-6 flex flex-col align-start max-w-xs text-white">
          <p className="mb-4 text-base text-left font-semibold">
            "Egal ob in Kunst und Kultur, oder im Sport: mich überzweugen
            Originalität, Kreativität und Leidenschaft für die "großen" und
            "kleinen" Dinge im Leben. Vor allem aber bin ich neugierig auf
            Menschen. NExT Table ist für mich der Tisch, der all das in sich
            vereint."
          </p>
          <strong className="text-sm">Elisabeth Mayr Kern</strong>
          <i className="text-sm">Kultur- und Kommunikationsexpertin</i>
        </div>
      </div>
    </div>
  )
}

export default HappyLady
