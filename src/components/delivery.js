import React from "react"
import icon from "../images/delivery.png"

function Delivery() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row mx-2">
        <div className="absolute sm:relative">
          <img src={icon} width="32" alt="Lieferbedinugen" />
        </div>
        <div className="w-full sm:w-3/6 pl-6 pt-1 sm:pl-0 sm:pt-0 text-sm ml-4 mr-2">
          <strong className="mb-2 block">Lieferbedinungen</strong>
          <p className="text-gray-700">
            <strong>Österreich:</strong> inklusive liefern und aufstellen!
            <br />
            <strong>EU:</strong> Liefern und aufstellen nach individueller
            Vereinbarung.*
            <br />
            <strong>Alle anderen Länder:</strong> auf Anfrage.*
            <br />
            <br />
            *Wir wählen Versandart und -weg, wobe iwir uns um eine möglichst
            kostengünstige Versandart und um die Berücksichtigung der
            Kundenwünsche bemühen.
          </p>
        </div>
        <div className="w-full sm:w-3/6 pl-6 sm:pl-0 ml-4 sm:ml-0 text-sm ml-2">
          <strong>&nbsp;</strong>
          <p className="text-gray-700">
            <strong>Rückgabe:</strong> Das Möbelstück wird direkt für Sie
            angefertigt. Eine Rückgabe ist nicht möglich.
            <br />
            <br />
            <strong>Widerrufsrecht:</strong> Die Widerrufsfrist beträgt 14 Tage
            ab dem Tag der Bestellung.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Delivery
