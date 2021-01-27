import PropTypes from "prop-types"
import React from "react"

function ChooseSize() {
  return (
    <div className="container mx-auto mt-12">
      <h2
        className="text-3xl uppercase mb-10 font-normal flex items-baseline justify-center"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        <small className="mr-2 font-mono text-gray-500">1.</small>
        Größe wählen
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        <Item dimension="180 x 120" price="€ 13.900" />
        <Item dimension="220 x 120" price="€ 14.900" />
        <Item dimension="250 x 120" price="€ 16.900" />
      </div>
      <p
        className="mt-8 text-center"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        Sonderwünsche möglich! Einfach melden.
      </p>
    </div>
  )
}

function Item({ dimension, price }) {
  return (
    <div className="flex flex-col items-center cursor-pointer">
      <div
        className="border text-center p-1 pl-8 pr-8 border-black hover:text-white hover:bg-black"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        {dimension}
      </div>
      <span className="font-mono text-xl mt-2">{price}</span>
    </div>
  )
}
Item.propTypes = {
  dimension: PropTypes.string,
  price: PropTypes.string,
}

Item.defaultProps = {
  dimension: ``,
  price: ``,
}

export default ChooseSize
