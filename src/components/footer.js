import { Link } from "gatsby"
import React from "react"
import Divider from "./divider"

const Footer = () => (
  <footer style={{ width: "100%", marginBottom: 32 }}>
    <div className="container mx-auto">
      <Divider />
      <div className="container flex justify-between">
        <div className="">
          <Link to="/agbs/" className="uppercase text-xs mr-3 text-gray-500">
            AGBs
          </Link>
          <Link
            to="/impressum/"
            className="uppercase text-xs mr-3 text-gray-500"
          >
            Impressum
          </Link>
          <Link
            to="/datenschutz/"
            className="uppercase text-xs mr-3 text-gray-500"
          >
            Datenschutz
          </Link>
        </div>
        <div className="">
          <Link to="/choose/" className="uppercase text-xs mr-3 text-gray-500">
            Shop
          </Link>
          <Link to="/" className="uppercase text-xs mr-3 text-gray-500">
            Love
          </Link>
          <Link to="/" className="uppercase text-xs text-gray-500">
            Contact
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
