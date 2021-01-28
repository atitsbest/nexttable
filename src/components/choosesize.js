import PropTypes from "prop-types"
import React from "react"

function ChooseSize({ sizes, value, onChange }) {
  return (
    <div className="container mx-auto mt-12">
      <h2
        className="text-3xl uppercase mb-10 font-normal flex items-baseline justify-center"
        style={{ fontFamily: "Benton Sans Medium" }}
      >
        <small className="mr-2 font-mono text-gray-500">1.</small>
        Größe wählen
      </h2>
      <div className={`grid sm:grid-cols-${sizes.length} gap-4`}>
        {sizes.map((s, idx) => (
          <Item
            key={idx}
            dimension={`${s.length} x ${s.width}`}
            price={`€ ${parseInt(s.price / 1000)}.${s.price % 1000}`}
            selected={value === idx}
            onSelectionChange={() => onChange(idx)}
          />
        ))}
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

function Item({ dimension, price, selected, onSelectionChange }) {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onSelectionChange}
      role="button"
    >
      <div
        className={`border text-center p-1 pl-8 pr-8 border-black  ${
          selected ? "text-white bg-black" : "hover:bg-gray-100"
        }`}
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
