import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Explosion = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "xtable.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
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
    <div className="mx-auto mt-8 px-3">
      <div className="">
        <div className="">
          <div>
            <div className="">
              <Item
                headline="High-end Tischplattenaufbau"
                text="5cm an höchster Stabilität"
              />
              <Item
                headline="Höchste Handwerkskunst"
                text="100% österreichische Qualität"
                right
              />
            </div>
          </div>
          <Img
            fluid={{
              ...data.placeholderImage.childImageSharp.fluid,
              aspectRatio: 21 / 9,
            }}
            className="mx-auto w-4/5"
          />
          <div>
            <div className="flex flex-col w-full">
              <Item headline="Natur pur" text="Keine versteckten Metallteile" />
              <Item
                headline="Fortlaufende Holzmaserung"
                text="Perfekte Holzbearbeitung bis ins Detail"
                right
              />
              <Item
                headline="Einzigartiges Design"
                text="Ein Tisch, der alle(s) verbindet"
              />
              <Item
                headline="Faszinierende Fußlösung"
                text="Sitzkomfort mit Beinfreiheit für alle"
                right
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Item({ headline, text, right }) {
  return (
    <div
      className="mt-4 md:mt-0 flex flex-col text-sm"
      style={{
        alignItems: right ? "flex-end" : "flex-start",
        textAlign: right ? "right" : "left",
      }}
    >
      <h2 className="leading-tight w-8/12">{headline}</h2>
      <span className="text-xs w-8/12">{text}</span>
      <div
        className="border-b border-gray-500 mb-4 w-7/12 pt-1"
        style={{ maxWidth: "66%" }}
      ></div>
    </div>
  )
}

Item.propTypes = {
  headline: PropTypes.string,
  text: PropTypes.string,
  right: PropTypes.bool,
}

Item.defaultProps = {
  headline: ``,
  text: ``,
  right: false,
}

export default Explosion
