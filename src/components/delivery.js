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
        <div className="w-3/6 text-sm ml-2">
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
