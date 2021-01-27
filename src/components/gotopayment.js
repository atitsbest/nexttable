import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import shop from "../images/shop.png"

function GotoPayment() {
  return (
    <div className="container mx-auto mt-10 flex flex-col items-center">
      <Link
        to="/payment"
        className="text-xl uppercase border-2 border-black p-2 pl-8 pr-8 hover:text-white hover:bg-black flex items-center"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        Weiter...
      </Link>
    </div>
  )
}

export default GotoPayment
