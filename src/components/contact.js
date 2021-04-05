import React from "react"
import Swelltext from "./swelltext"
import icon from "../images/contact.png"

const Contact = () => (
  <div className="container mx-auto text-center mt-8 flex flex-col items-center">
    <a href="mailto:joachim@thening.at">
      <img src={icon} width="32" alt="Kontakt" />
    </a>
    <Swelltext
      subheadline="Ein Tisch lädt ein zum Gespräch"
      text="NExT TABLE hat viel zu erzählen. Sind Sie neugierig und haben noch Fragen? Wir geben gerne Auskunft - bei einem Tischgespräch rund um den NExT TABLE."
    />
  </div>
)

export default Contact
