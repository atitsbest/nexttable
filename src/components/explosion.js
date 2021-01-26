import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Explosion = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "explosion.jpg" }) {
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

  const style = {
    half: {
      flex: "1 1 50%",
      alignItems: "center",
    },
    ul: {
      margin: "0 32px",
      padding: 0,
      listStyleType: "none",
    },
    li: {
      margin: "10% 0",
      borderBottom: "1px solid #000",
      width: "100%",
      fontSize: ".75rem",
      display: "flex",
      flexDirection: "column",
      lineHeight: ".875rem",
    },
  }

  return (
    <div style={{}}>
      <div
        style={{
          maxWidth: 960,
          position: "relative",
        }}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div style={style.half}>
            <ul style={style.ul}>
              <li style={style.li}>
                <strong>high-end Tischplattenaufbau</strong>
                <span>Höchste Stabilität bei nur 5cm Dicke</span>
              </li>
              <li style={style.li}>
                <strong>Einzigartiges Design</strong>
                <span>Skulptur, die alle(s) verbindet</span>
              </li>
              <li style={style.li}>
                <strong>Natur pur</strong>
                <span>Keine versteckten Metallteile</span>
              </li>
            </ul>
          </div>
          <div style={style.half}>
            <ul style={{ ...style.ul, textAlign: "right" }}>
              <li style={style.li}>
                <strong>Höchste Handwerkskunst</strong>
                <span>100% Handarbeit in Österreich</span>
              </li>
              <li style={style.li}>
                <strong>Fortlaufende Holzmaserung</strong>
                <span>Detailverliebte Holzbearbeitung</span>
              </li>
              <li style={style.li}>
                <strong>Faszinierende Fußlösung</strong>
                <span>Beinfreiheit für alle</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explosion
