import React from "react"
import Swelltext from "./swelltext"
import icon from "../images/contact.png"

const Contact = () => (
  <div className="container mx-auto text-center mt-8 flex flex-col items-center">
    <img src={icon} width="32" alt="Kontakt" />
    <Swelltext
      subheadline="Ein Tisch lädt ein zum Gespräch"
      text="NExT Table hat viel zu erzählen. Sind Sie neugierig und haben noch Fragen? Wir geben gerne Auskunft - bei einem Tischgespräch rund um den NExT Table."
    />
  </div>
)

export default Contact
