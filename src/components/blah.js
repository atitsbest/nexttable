import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Blah = ({ image, header, text }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "1 1 33%", marginRight: "1rem" }}>
        <Img fluid={image} style={{ height: "6rem" }} />
      </div>
      <div
        style={{
          flex: "1 1 66%",
          marginLeft: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <small style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          {header}
        </small>
        <small>{text}</small>
      </div>
    </div>
  )
}

Blah.propTypes = {
  text: PropTypes.string,
  header: PropTypes.string,
  image: PropTypes.string,
}

Blah.defaultProps = {
  text: ``,
  header: ``,
}

export default Blah
