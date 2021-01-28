import { Link } from "gatsby"
import React from "react"
import Divider from "./divider"
import love from "../images/love.png"
import contact from "../images/contact.png"

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
        <div className="grid grid-cols-3 gap-2">
          <Link to="/choose" className="uppercase text-xs text-gray-500">
            Shop
          </Link>
          <Link to="/" className="mx-auto">
            <img
              src={love}
              width="16"
              style={{ opacity: 0.7 }}
              alt="Show your love"
            />
          </Link>
          <Link to="/" className="mx-auto">
            <img
              src={contact}
              width="16"
              style={{ opacity: 0.7 }}
              alt="Kontakt"
            />
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
