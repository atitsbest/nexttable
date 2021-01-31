import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html
      {...props.htmlAttributes}
      className="text-gray-800 leading-tight text-lg antialiased"
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <link
          rel="stylesheet"
          type="text/css"
          href="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css"
        />
        <script src="//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.addEventListener("load", function()
            {window.cookieconsent.initialise({
              palette: {
                popup: {
                  background: '#333',
                  text: 'rgba(255,255,255,.9)',
                },
                button: {
                  background: '#ffffff',
                  text: '#333',
                },
              },
              position: 'bottom-left',
              content: {
                message:
                  'Wir nutzen Cookies, um Ihre Erfahrung auf dieser Webseite zu verbessern. Manche Cookies sind notwendig, damit unsere Website funktioniert.',
                dismiss: 'Verstanden',
                link: 'Mehr erfahren',
              },
            })}
            );`,
          }}
        />
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
