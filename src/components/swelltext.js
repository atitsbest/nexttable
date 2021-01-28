import PropTypes from "prop-types"
import React from "react"

function Swelltext({ text, headline, subheadline }) {
  return (
    <div className="container mx-auto max-w-md flex flex-col align-center text-center m-8 mb-0">
      {subheadline && (
        <h3 className="mb-4" style={{ fontFamily: "Benton Sans Medium" }}>
          {subheadline}
        </h3>
      )}
      {headline && (
        <h1 className="uppercase text-3xl font-bold mb-4">{headline}</h1>
      )}
      {text && <p className="text-xl mx-2 sm:mx-0">{text}</p>}
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
