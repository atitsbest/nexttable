import PropTypes from "prop-types"
import React from "react"

function Swelltext({ text, headline, subheadline }) {
  return (
    <div className="px-6 mx-auto max-w-lg flex flex-col align-center text-center m-8 mb-4">
      {subheadline && (
        <h4 className="mb-4 font-serif font-semibold">{subheadline}</h4>
      )}
      {headline && (
        <h1 className="uppercase text-2xl md:text-3xl mb-4">{headline}</h1>
      )}
      {text && (
        <p className="text-lg md:text-xl mx-2 sm:mx-0 leading-tight">{text}</p>
      )}
    </div>
  )
}

Swelltext.propTypes = {
  text: PropTypes.string,
  headline: PropTypes.string,
  subheadline: PropTypes.string,
}

Swelltext.defaultProps = {
  text: ``,
  headline: null,
  subheadline: null,
}

export default Swelltext
