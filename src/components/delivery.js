import React from "react"
import icon from "../images/delivery.png"

function Delivery() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row mx-2">
        <div className="">
          <img src={icon} width="32" alt="Lieferbedinugen" />
        </div>
        <div className="w-3/6 text-sm ml-4 mr-2">
          <strong style={{ fontFamily: "Benton Sans Medium" }}>
            Lieferbedinungen
          </strong>
          <p className="text-gray-700">
            Österreich: inklusive liefern und aufstellen!EU: Liefern und
            aufstellen nach individueller Vereinbarung.*Alle anderen Länder: auf
            Anfrage.**Wir wählen Versandart und -weg, wobe iwir uns um eine
            möglichst kostengünstige Versandart und um die Berücksichtigung der
            Kundenwünsche bemühen.
          </p>
        </div>
        <div className="w-3/6 text-sm ml-2">
          <strong>&nbsp;</strong>
          <p className="text-gray-700">
            Rückgabe: Das Möbelstück wird direkt für Sie angefertigt. Eine
            Rückgabe ist nicht möglich. Widerrufsrecht: Die Widerrufsfrist
            beträgt 14 Tage ab dem Tag der Bestellung.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Delivery
