import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ text, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "xtable.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1960) {
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
        <Img
          fluid={{
            ...data.placeholderImage.childImageSharp.fluid,
          }}
        />
        {text && (
          <div className="absolute inset-0 flex justify-center mt-8">
            <h1 className="text-3xl text-white text-center font-bold uppercase max-w-sm">
              {text}
            </h1>
          </div>
        )}
      </div>
      {subtitle && (
        <div className="container mx-auto">
          <h3 className="text-xl">{subtitle}</h3>
        </div>
      )}
    </div>
  )
}

Hero.propTypes = {
  text: PropTypes.string,
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  text: ``,
  subtitle: null,
}

export default Hero
