import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Explosion = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "explosion.png" }) {
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
      padding: 0,
      listStyleType: "none",
    },
    li: {
      margin: "15% 0",
      borderBottom: "1px solid #999",
      width: "100%",
      fontSize: ".75rem",
      display: "flex",
      flexDirection: "column",
      lineHeight: ".875rem",
    },
    strong: {
      fontFamily: "Benton Sans Medium",
      fontWeight: 400,
    },
  }

  return (
    <div className="container mx-auto mt-8">
      <div className="relative">
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div className="flex absolute inset-0 top-1/4">
          <div style={style.half}>
            <ul style={style.ul} className="mr-8">
              <li style={style.li}>
                <strong style={style.strong}>
                  high-end Tischplattenaufbau
                </strong>
                <span>Höchste Stabilität bei nur 5cm Dicke</span>
              </li>
              <li style={style.li}>
                <strong style={style.strong}>Einzigartiges Design</strong>
                <span>Skulptur, die alle(s) verbindet</span>
              </li>
              <li style={style.li}>
                <strong style={style.strong}>Natur pur</strong>
                <span>Keine versteckten Metallteile</span>
              </li>
            </ul>
          </div>
          <div style={style.half}>
            <ul style={style.ul} className="ml-8 text-right">
              <li style={style.li}>
                <strong style={style.strong}>Höchste Handwerkskunst</strong>
                <span>100% Handarbeit in Österreich</span>
              </li>
              <li style={style.li}>
                <strong style={style.strong}>Fortlaufende Holzmaserung</strong>
                <span>Detailverliebte Holzbearbeitung</span>
              </li>
              <li style={style.li}>
                <strong style={style.strong}>Faszinierende Fußlösung</strong>
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
