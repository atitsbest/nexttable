import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

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
    <div
      style={{
        position: "relative",
        background: "#000",
      }}
    >
      <div
        style={{
          maxWidth: 960,
        }}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        {text && (
          <h1
            style={{
              fontFamily: "Benton Sans Light",
              position: "absolute",
              textAlign: "center",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              color: "#fff",
            }}
          >
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
