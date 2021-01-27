import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"

const AvailableWood = ({ selector }) => {
  const data = useStaticQuery(graphql`
    query {
      appleImage: file(relativePath: { eq: "choose_apple.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mapleImage: file(relativePath: { eq: "choose_maple.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      nutImage: file(relativePath: { eq: "choose_nut.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container mx-auto">
      <ul
        className="flex justify-around grid grid-cols-3 gap-4"
        style={{
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }}
      >
        <li className="flex flex-col text-center">
          <Link to="/choose">
            <Img fluid={data.appleImage.childImageSharp.fluid} />
            <strong className="mt-1">Apfelbaum</strong>
          </Link>
        </li>
        <li className="flex flex-col text-center">
          <Link to="/choose">
            <Img fluid={data.nutImage.childImageSharp.fluid} />
            <strong className="mt-1">Nussbaum</strong>
          </Link>
        </li>
        <li className="flex flex-col text-center">
          <Link to="/choose">
            <Img fluid={data.mapleImage.childImageSharp.fluid} />
            <strong className="mt-1">Ahorn</strong>
          </Link>
        </li>
      </ul>
    </div>
  )
}
AvailableWood.propTypes = {
  selector: PropTypes.bool,
}

AvailableWood.defaultProps = {
  selector: true,
}

export default AvailableWood
