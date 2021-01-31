import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Blah = ({ image, header, text }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return (
    <div className="flex justify-between items-center gap-6 mr-2">
      <div className="w-2/6">
        <Img fluid={{ ...image, aspectRatio: 25 / 9 }} />
      </div>
      <div className="w-4/6 flex flex-col">
        <strong style={{ fontSize: ".875rem" }}>{header}</strong>
        <span style={{ fontSize: ".875rem" }}>{text}</span>
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
