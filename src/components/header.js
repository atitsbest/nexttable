import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Theme } from "../utils"

const Header = ({ siteTitle }) => (
  <header style={{ width: "100%", background: "black" }}>
    <div className="container mx-auto">
      <h1 style={{ margin: 0, textAlign: "center" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
