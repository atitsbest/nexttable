import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const TheJo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "jo.jpg" }) {
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

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          maxWidth: 960,
          background: "#ececec",
        }}
      >
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "22rem",
            margin: "32px 24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3
            style={{
              fontWeight: 400,
            }}
          >
            "Für mich ist entscheidend, dass Design mit Wissen und Kompetenz
            umgesetzt wird. Next Table ist deshalb besonders, weil bei diesem
            Tisch alles passt. Perfektes Hand-werk macht meinen Next Table zu
            einem Designstück zum Leben."
          </h3>
          <strong style={{ lineHeight: "1rem" }}>Joachim Jungreithmayr</strong>
          <i>Designer</i>
        </div>
      </div>
    </div>
  )
}

export default TheJo
