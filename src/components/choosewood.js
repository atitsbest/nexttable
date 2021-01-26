import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChooseWood = ({ selector }) => {
  const data = useStaticQuery(graphql`
    query {
      appleImage: file(relativePath: { eq: "wood_apple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mapleImage: file(relativePath: { eq: "wood_maple.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nutImage: file(relativePath: { eq: "wood_nut.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }}
      >
        <li>
          <Img fluid={data.appleImage.childImageSharp.fluid} />
          <strong>Apfelbaum</strong>
        </li>
        <li>
          <Img fluid={data.nutImage.childImageSharp.fluid} />
          <strong>Nussbaum</strong>
        </li>
        <li>
          <Img fluid={data.mapleImage.childImageSharp.fluid} />
          <strong>Ahorn</strong>
        </li>
      </ul>
    </div>
  )
}
ChooseWood.propTypes = {
  selector: PropTypes.bool,
}

ChooseWood.defaultProps = {
  selector: true,
}

export default ChooseWood
