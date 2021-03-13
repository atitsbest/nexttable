import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Divider from "./divider"

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
    <div className="mx-6">
      <ul
        className="md:flex md:justify-around md:grid md:grid-cols-3 md:gap-4"
        style={{
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }}
      >
        <li className="flex flex-col text-center">
          <Link to="/choose">
            <Img fluid={data.appleImage.childImageSharp.fluid} />
            <strong className="mt-1 font-serif whitespace-nowrap">
              NExT Table - Apfel
            </strong>
          </Link>
          <Divider className="visible md:invisible" />
        </li>
        <li className="flex flex-col text-center">
          <Link to="/choose">
            <Img fluid={data.nutImage.childImageSharp.fluid} />
            <strong className="mt-1 font-serif whitespace-nowrap">
              NExT Table - Nuss
            </strong>
          </Link>
          <Divider className="visible md:invisible" />
        </li>
        <li className="flex flex-col text-center">
          <Link to="/choose">
            <Img fluid={data.mapleImage.childImageSharp.fluid} />
            <strong className="mt-1 font-serif whitespace-nowrap">
              NExT Table - Ahorn
            </strong>
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
