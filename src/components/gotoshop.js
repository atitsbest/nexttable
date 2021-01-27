import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Gotoshop = ({ text }) => {
  return (
    <div className="container mx-auto mt-4 flex flex-col align-center max-w-md">
      <h1 className="text-xl text-center mb-8">
        High-end Design trifft Handwerk mit Perfektion. Das Ergebnis: ein
        einzigartiger Tischzum Wohnen und Leben. Stilvolles Design fürperfekte
        Augenblicke.
      </h1>
      <Link className="button" to="/choose/">
        Goto shop
      </Link>
    </div>
  )
}

Gotoshop.propTypes = {
  text: PropTypes.string,
}

Gotoshop.defaultProps = {
  text: ``,
}

export default Gotoshop
