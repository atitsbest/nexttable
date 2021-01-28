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
    <div className="container mx-auto mt-8">
      <div className="relative sm:flex sm:justify-center">
        <Img
          fluid={{
            ...data.placeholderImage.childImageSharp.fluid,
            aspectRatio: 21 / 9,
          }}
          className="mx-auto"
          style={{ width: "80%" }}
        />
        <div className="sm:flex sm:absolute inset-0 sm:grid sm:grid-cols-2 sm:gap-8 mt-4 mb-16">
          <div>
            <div className="ml-8 grid sm:grid-rows-3 sm:gap-8">
              <Item
                headline="high-end Tischplattenaufbau"
                text="Höchste Stabilität bei nur 5cm Dicke"
              />
              <Item
                headline="Einzigartiges Design"
                text="Skulptur, die alle(s) verbindet"
              />
              <Item headline="Natur pur" text="Keine versteckten Metallteile" />
            </div>
          </div>
          <div>
            <div className="mr-8 grid sm:grid-rows-3 sm:gap-8">
              <Item
                headline="Höchste Handwerkskunst"
                text="100% Handarbeit in Österreich"
                right
              />
              <Item
                headline="Fortlaufende Holzmaserung"
                text="Detailverliebte Holzbearbeitung"
                right
              />
              <Item
                headline="Faszinierende Fußlösung"
                text="Beinfreiheit für alle"
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
      className="flex flex-col text-sm border-b border-gray-500 mb-4 sm:mb-0"
      style={{ textAlign: right ? "right" : "left" }}
    >
      <strong
        className="font-normal"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        {headline}
      </strong>
      <span className="">{text}</span>
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
