import { Link } from "gatsby"
import React from "react"
import Divider from "./divider"
import contact from "../images/contact.png"

const Footer = () => (
  <footer className="w-full my-6">
    <Divider />
    <div className="container mx-auto px-6">
      <div
        className="container flex justify-between"
        style={{ fontSize: ".825rem" }}
      >
        <div className="">
          {/*
          <Link to="/agbs/" className="uppercase text-xs mr-3 text-gray-500">
            AGBs
          </Link>
          */}
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
        <div className="grid grid-cols-2 gap-2">
          <Link to="/choose" className="uppercase text-xs text-gray-500">
            Shop
          </Link>
          {/*
          <Link to="/" className="mx-auto">
            <img
              src={love}
              width="16"
              style={{ opacity: 0.7 }}
              alt="Show your love"
            />
          </Link>
          */}
          <a href="mailto:joachim@thening.at" className="mx-auto">
            <img
              src={contact}
              width="16"
              style={{ opacity: 0.7 }}
              alt="Kontakt"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
