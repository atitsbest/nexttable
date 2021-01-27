import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Blahblah = ({ image, header, text }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ flex: "1 1 33%", marginRight: "1rem" }}>
        <Img fluid={image} />
      </div>
      <div style={{ flex: "1 1 66%", marginLeft: "1rem" }}>
        <h3 style={{ textTransform: "uppercase" }}>{header}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

Blahblah.propTypes = {
  text: PropTypes.string,
  header: PropTypes.string,
  image: PropTypes.string,
}

Blahblah.defaultProps = {
  text: ``,
  header: ``,
}

export default Blahblah
