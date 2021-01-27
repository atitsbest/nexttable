import { Link } from "gatsby"
import React from "react"
import Divider from "./divider"

const Footer = () => (
  <footer style={{ width: "100%", marginBottom: 32 }}>
    <div className="container mx-auto">
      <Divider />
      <div
        className="container flex"
        style={{ justifyContent: "space-between" }}
      >
        <div className="">
          <Link to="/agb/">AGBs</Link>
          <Link to="/impressum/">Impressum</Link>
          <Link to="/datenschutz/">Datenschutz</Link>
        </div>
        <div className="">
          <Link to="/choose/">Shop</Link>
          <Link to="/">Love</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
