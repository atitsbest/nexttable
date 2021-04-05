import React from "react"
import icon from "../images/fulfillment.png"

function Fulfillment() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row mx-2">
        <div className="absolute sm:relative">
          <img src={icon} width="32" alt="Auftragsabwicklung" />
        </div>
        <div className="w-full sm:w-3/6 pl-6 pt-1 sm:pl-0 sm:pt-0 text-sm ml-4 mr-2">
          <strong className="mb-2 block">Auftragsabwicklung</strong>
          <p className="text-gray-700">
            Nachdem Sie kostenpflichtig bestellt und wir Ihnen die
            Auftragsbestätigung zugeschickt haben, beginnt umgehend die
            Materialbeschaffung. Sobald wir dieses erhalten, sorgfältig
            kontrolliert und für
          </p>
        </div>
        <div className="w-full sm:w-3/6 pl-6 sm:pl-0 ml-4 sm:ml-0 text-sm ml-2">
          <strong className="invisible sm:visible">&nbsp;</strong>
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
