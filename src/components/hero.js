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
      <div className="mx-auto relative">
        {children && (
          <div className="flex justify-center pt-4 mx-4">
            <h1 className="text-xl text-white text-center uppercase">
              {children}
            </h1>
          </div>
        )}
      </div>
      <Img
        fluid={{
          ...data.placeholderImage.childImageSharp.fluid,
        }}
        fadeIn
      />
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
