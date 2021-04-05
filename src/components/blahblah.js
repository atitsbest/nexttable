import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"

const Blahblah = ({ image, header, text }) => {
  if (!image) {
    return <div>Picture not found</div>
  }

  return (
    <div className="mx-4 md:mx-0 mb-8 md:mb-0">
      <div className="md:mb-4">
        <Img fluid={{ ...image, aspectRatio: 1 / 1 }} />
      </div>
      <div className="">
        <h3 className="mt-4 leading-tight text-xl md:mt-0 uppercase mb-4">
          {header}
        </h3>
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
