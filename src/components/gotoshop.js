import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

const Gotoshop = ({ text }) => {
  return (
    <div className="container mx-auto mt-8 flex flex-col align-center max-w-xs">
      <Link className="button font-bold text-xl" to="/choose">
        shop
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
