import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HappyLady = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lady.jpg" }) {
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
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div className="absolute inset-0 mt-6 ml-6 flex flex-col align-start max-w-xs text-white">
          <p className="mb-4 text-base text-left font-semibold">
            "Cum debissum volorem. Ut molum vilet voloratione"
          </p>
          <strong className="text-sm">Pamela Orange</strong>
          <i className="text-sm">Architect</i>
        </div>
      </div>
    </div>
  )
}

export default HappyLady