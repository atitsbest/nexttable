import PropTypes from "prop-types"
import React from "react"

function Fulfillment() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        <div className="flex-1">icon</div>
        <div className="w-3/6 text-sm ml-2 mr-2">
          <strong style={{ fontFamily: "Benton Sans Medium" }}>
            Auftragsabwicklung
          </strong>
          <p className="text-gray-700">
            Nachdem Sie kostenpflichtig bestellt und wir Ihnen die
            Auftragsbestätigung zugeschickt haben, beginnt umgehend die
            Materialbeschaffung. Sobald wir dieses erhalten, sorgfältig
            kontrolliert und für
          </p>
        </div>
        <div className="w-3/6 text-sm ml-2">
          <strong>&nbsp;</strong>
          <p className="text-gray-700">
            sehr gut befunden haben, starten wir mit der Produktion. Der Tisch
            wird individuell nur für Sie in unserer Werkstatt in Österreich
            hergestellt. Nach Fertigstellung und Endkotrolle vereinbaren wir uns
            einen Liefertermin. Und die Freude beginnt!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Fulfillment
