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
    <div className="mx-6 md:pt-4">
      <ul
        className="md:justify-around md:grid md:grid-cols-3 md:gap-4"
        style={{
          margin: 0,
          padding: 0,
          listStyleType: "none",
        }}
      >
        <Item
          image={data.appleImage.childImageSharp.fluid}
          title="NExT Table - Apfel"
          description="Das Holz des Apfelbaumes besticht durch sein außergewöhnliches Farbspiel."
        />
        <Item
          image={data.nutImage.childImageSharp.fluid}
          title="NExT Table - Nuss"
          description="Das Holz des Nussbaumes ist eine der edelsten heimischen Holzarten."
        />
        <Item
          image={data.mapleImage.childImageSharp.fluid}
          title="NExT Table - Ahorn"
          description="Das Ahornholz ist der hellhäutige Ästhet unter den heimischen Hölzern."
          nodivider
        />
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

function Item({ image, title, description, nodivider }) {
  return (
    <li className="flex flex-col text-center">
      <Link to="/choose">
        <Img fluid={image} />
        <strong className="pt-8 font-serif whitespace-nowrap">{title}</strong>
      </Link>
      <p className="mt-2">{description}</p>
      <strong className="font-serif mt-1">Mehr...</strong>
      {!nodivider && <Divider className="visible md:invisible" />}
    </li>
  )
}
Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  nodivider: PropTypes.bool,
}

Item.defaultProps = {
  title: ``,
  description: ``,
  nodivider: false,
}

export default AvailableWood
