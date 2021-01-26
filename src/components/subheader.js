import PropTypes from "prop-types"
import React from "react"

function Subheader({ siteTitle }) {
  const style = {
    ul: {
      listStyleType: "none",
      width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      margin: 0,
      padding: 0,
    },
    li: {
      marginRight: ".5rem",
    },
  }

  return (
    <div
      style={{
        margin: `0 auto`,
      }}
    >
      <ul style={style.ul}>
        <li style={style.li}>Shop</li>
        <li style={style.li}>Love</li>
        <li style={style.li}>Contact</li>
      </ul>
    </div>
  )
}

Subheader.propTypes = {
  siteTitle: PropTypes.string,
}

Subheader.defaultProps = {
  siteTitle: ``,
}

export default Subheader
