import PropTypes from "prop-types"
import React from "react"

function Ensurance() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="flex-1">icon</div>
        <div className="w-3/6 text-sm ml-2 mr-2">
          <strong style={{ fontFamily: "Benton Sans Medium" }}>
            Lieferversicherung
          </strong>
        </div>
        <div className="w-3/6 text-sm ml-2">
          <p className="text-gray-700">Inklusive.</p>
        </div>
      </div>
    </div>
  )
}

export default Ensurance
