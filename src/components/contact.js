import React from "react"
import Swelltext from "./swelltext"
import icon from "../images/contact.png"

const Contact = () => (
  <div className="container mx-auto text-center mt-8 flex flex-col items-center">
    <img src={icon} width="32" />
    <Swelltext
      subheadline="contac us lorem ipsum"
      text="Simpeles autem quasperit, que event harchi-tat ex esserovitati simusti sin culpa voluptaspidebis sunti nis re ea cusdaer rorepel en."
    />
  </div>
)

export default Contact
