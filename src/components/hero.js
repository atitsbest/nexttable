import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ text }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "xtable.jpg" }) {
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
    <div className="max-w-full bg-black">
      <div className="container mx-auto relative">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        {text && (
          <h1 className="absolute text-3xl text-white text-center font-bold inset-0 mt-8">
            {text}
          </h1>
        )}
      </div>
    </div>
  )
}

Hero.propTypes = {
  text: PropTypes.string,
}

Hero.defaultProps = {
  text: ``,
}

export default Hero
