import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Blahblah = ({ image, header, text }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return (
    <div className="mx-6 md:flex md:justify-between md:items-center md:gap-6 md:mr-2">
      <div className="w-full md:w-2/6">
        <Img fluid={{ ...image, aspectRatio: 1 / 1 }} />
      </div>
      <div className="md:w-4/6">
        <h3 className="text-3xl uppercase mb-4 leading-10">{header}</h3>
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
