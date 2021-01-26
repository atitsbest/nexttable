import PropTypes from "prop-types"
import React from "react"

function Swelltext({ text, headline }) {
  return (
    <div
      style={{
        margin: `0 auto`,
        textAlign: "center",
      }}
    >
      {headline && (
        <h1 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
          {headline}
        </h1>
      )}
      {text && <h2 style={{ fontWeight: 100 }}>{text}</h2>}
    </div>
  )
}

Swelltext.propTypes = {
  text: PropTypes.string,
}

Swelltext.defaultProps = {
  text: ``,
}

export default Swelltext
