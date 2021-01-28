import Typography from 'typography'
import fairyGateTheme from 'typography-theme-fairy-gates'

fairyGateTheme.headerFontFamily[0] = 'Raleway'
fairyGateTheme.bodyFontFamily[0] = 'Lora'
//const typography = new Typography(fairyGateTheme)

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: [
    'Raleway',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Raleway', 'serif'],
})

export default typography
