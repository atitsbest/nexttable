import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChooseWood = ({ woods, value, onChange }) => {
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
    <div className="max-w bg-gray-100 pt-4 pb-4 mt-8">
      <div className="container mx-auto">
        <h2
          className="text-3xl uppercase text-center mt-6 font-normal flex justify-center items-baseline"
          style={{ fontFamily: "Benton Sans Medium" }}
        >
          <small className="mr-2 font-mono text-gray-500">2.</small>
          Holz wählen
        </h2>
        <ul
          className={` sm:grid sm:grid-cols-${woods.length} gap-4`}
          style={{
            margin: 0,
            padding: 0,
            listStyleType: "none",
          }}
        >
          {woods.map((w, idx) => (
            <Item
              key={idx}
              image={data[`${w.image}Image`].childImageSharp.fluid}
              text={w.name}
              selected={value === idx}
              onSelectionChange={() => onChange(idx)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

function Item({ image, text, selected, onSelectionChange }) {
  return (
    // eslint-disable-next-line
    <li
      className={`mx-4 sm:mx-0 text-center cursor-pointer pb-4 pl-2 pr-2 sm:pl-0 sm:pr-0 rounded-sm ${
        selected ? "bg-black text-white" : "hover:bg-gray-200"
      }`}
      onClick={onSelectionChange}
    >
      <Img fluid={image} />
      <strong className="mt-1">{text}</strong>
    </li>
  )
}

export default ChooseWood
