import React from "react"
import icon from "../images/ensurance.png"

function Ensurance() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row items-center mx-2">
        <div className="">
          <img src={icon} width="32" alt="Lieferversicherung" />
        </div>
        <div className="w-3/6 text-sm ml-4 mr-2">
          <strong>Lieferversicherung</strong>
        </div>
        <div className="w-3/6 text-sm ml-2">
          <p className="text-gray-700">Inklusive.</p>
        </div>
      </div>
    </div>
  )
}

export default Ensurance
