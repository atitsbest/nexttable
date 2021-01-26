import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Gotoshop = ({ text }) => {
  return (
    <div style={{}}>
      <h1 style={{ fontWeight: 100 }}>
        High-end Design trifft Handwerk mit Perfek-tion. Das Ergebnis: ein
        einzigartiger Tischzum Wohnen und Leben. Stilvolles Design fürperfekte
        Augenblicke.
      </h1>
      <div>
        <Link className="button" to="/choose/">
          Goto shop
        </Link>
      </div>
    </div>
  )
}

Gotoshop.propTypes = {
  text: PropTypes.string,
}

Gotoshop.defaultProps = {
  text: ``,
}

export default Gotoshop
