import React from "react"
import logo from "../images/logo.png"

const Logo = () => (
  <div className="flex flex-col mt-4">
    <div className="flex flex-col items-center">
      <img src={logo} className="max-h-4 md:max-h-6 " alt="Logo" />
    </div>
    <small
      className="text-opacity-50 text-xs mt-1"
      style={{ marginLeft: "30%" }}
    >
      by Joachim Jungreithmayr
    </small>
  </div>
)

export default Logo
