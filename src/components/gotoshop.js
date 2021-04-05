import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Gotoshop = ({ text }) => {
  return (
    <div className="container mx-auto mt-4 flex flex-col align-center max-w-md">
      <span className="text-md md:text-xl text-center mb-8 mx-4">
        High-end Design trifft Handwerk mit Perfektion. Das Ergebnis: ein
        einzigartiger Tisch zum Wohnen und Leben. Stilvolles Design für perfekte
        Augenblicke.
      </span>
      {/*<Link className="button" to="/choose">
        shop...
      </Link>
  */}
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
