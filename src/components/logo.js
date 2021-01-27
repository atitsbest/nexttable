import React from "react"
import logo from "../images/logo.png"

const Logo = () => (
  <div className="flex flex-col mt-4">
    <div className="flex flex-col items-center">
      <img src={logo} style={{ maxHeight: "1.5rem" }} />
    </div>
    <small className="text-xs mt-1" style={{ marginLeft: "30%" }}>
      by Joachim Jungreithmayr
    </small>
  </div>
)

export default Logo
