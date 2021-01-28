import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Blahblah = ({ image, header, text }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return (
    <div className="flex justify-between gap-6 items-center mr-2">
      <div className="w-2/6">
        <Img fluid={{ ...image, aspectRatio: 1 / 1 }} />
      </div>
      <div className="w-4/6">
        <h3 className="text-3xl font-bold uppercase mb-4">{header}</h3>
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
