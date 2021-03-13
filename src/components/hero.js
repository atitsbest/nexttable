import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = ({ children, subtitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "xtable-2.jpg" }) {
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
        {children && (
          <div className="absolute inset-0 flex justify-center mt-8">
            <h1 className="text-2xl text-white text-center uppercase max-w-xl">
              {children}
            </h1>
          </div>
        )}
      </div>
      {subtitle && (
        <div className="container mx-auto max-w-lg text-center pb-4">
          <span className="text-lg text-white block">{subtitle}</span>
        </div>
      )}
    </div>
  )
}

Hero.propTypes = {
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  subtitle: null,
}

export default Hero
