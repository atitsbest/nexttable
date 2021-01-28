import PropTypes from "prop-types"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChooseWood = ({ selector }) => {
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
    <div className="max-w bg-gray-100 pt-4 pb-8 mt-8">
      <div className="container mx-auto">
        <h2
          className="text-3xl uppercase text-center mt-6 font-normal flex justify-center items-baseline"
          style={{ fontFamily: "Benton Sans Medium" }}
        >
          <small className="mr-2 font-mono text-gray-500">2.</small>
          Holz wählen
        </h2>
        <ul
          className="flex justify-around grid grid-cols-3 gap-4"
          style={{
            margin: 0,
            padding: 0,
            listStyleType: "none",
          }}
        >
          <li className="flex flex-col text-center cursor-pointer">
            <Img fluid={data.appleImage.childImageSharp.fluid} />
            <strong className="mt-1">Apfelbaum</strong>
          </li>
          <li className="flex flex-col text-center cursor-pointer">
            <Img fluid={data.nutImage.childImageSharp.fluid} />
            <strong className="mt-1">Nussbaum</strong>
          </li>
          <li className="flex flex-col text-center cursor-pointer hover:border-2 hover:border-black">
            <Img fluid={data.mapleImage.childImageSharp.fluid} />
            <strong className="mt-1">Ahorn</strong>
          </li>
        </ul>
      </div>
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
