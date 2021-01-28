import { css } from 'styled-components'
import holz_bg from '../images/holz_bg.gif'

const sizes = {
  giant: 90,
  desktop: 77,
  tablet: 60,
  mobile: 48,
}

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label]
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}rem) {
      ${css(...args)};
    }
  `
  return accumulator
}, {})

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

export function holzBg() {
  return `
    background-image: url(${holz_bg});
    background-repeat: repeat;
    `
}

export function section() {
  return `
  margin: 0 0 8px 0;
  ${media.tablet`border-radius: 3px;`}
`
}

export function pseudo({ display, pos, content }) {
  return `
        content: ${content || ''};
        display: ${display || 'block'};
        position: ${pos || 'absolute'};
    `
}

export function responsiveRatio(x, y, ispseudo) {
  const padding = (y / x) * 100

  if (ispseudo === true) {
    return `
        &:before {
            ${pseudo({ pos: 'relative' })}
            width: 100%;
            padding-top: ${padding}%;
        }
      `
  } else {
    return `
        padding-top: ${padding}%;
    `
  }
}
