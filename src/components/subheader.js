import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import contact from "../images/contact.png"

function Subheader({ siteTitle }) {
  const style = {
    ul: {
      listStyleType: "none",
      fontSize: ".825rem",
    },
  }

  return (
    <div className="container mx-auto mt-1 mb-1">
      <ul style={style.ul} className="flex justify-end items-center p-0 m-0">
        <li className="mr-3">
          <Link
            to="/choose"
            activeClassName="font-bold"
            className="text-sm uppercase"
          >
            Shop
          </Link>
        </li>
        {/* 
       <li className="mr-4">
          <img src={love} width="16" alt="Show your love" />
        </li>
        */}
        <li className="mr-4">
          <a href="mailto:joachim@thening.at">
            <img src={contact} width="16" alt="Kontakt" />
          </a>
        </li>
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
