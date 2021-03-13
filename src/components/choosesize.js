import PropTypes from "prop-types"
import React from "react"

function ChooseSize({ sizes, value, onChange }) {
  return (
    <div className="container mx-auto mt-12">
      <h2 className="text-3xl uppercase mb-10 font-normal flex items-baseline justify-center">
        <small className="mr-2 font-mono text-gray-500">1.</small>
        Größe wählen
      </h2>
      <div className={`sm:grid grid-cols-${sizes.length || 3} gap-4`}>
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
      <strong className="mt-4 text-center block">
        Wir erfüllen gerne ihre Sonderwünsche! Schreiben Sie uns einfach, und
        wir treffen uns zu einem persönlichen Tischgespräch.
      </strong>
    </div>
  )
}

function Item({ dimension, price, selected, onSelectionChange }) {
  return (
    // eslint-disable-next-line
    <div
      className="flex flex-col items-center cursor-pointer mb-4"
      onClick={onSelectionChange}
      role="button"
    >
      <div
        className={`border text-center p-1 pl-8 pr-8 border-black  ${
          selected ? "text-white bg-black" : "hover:bg-gray-100"
        }`}
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
