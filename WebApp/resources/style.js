let colors = {}

colors.primary = '#0E7F84'
colors.secondary = '#4EDEB7'
colors.tertiary = '#FBFBD9'
colors.accent = '#E29340'
colors.alternative = '#E06152'
colors.lightGray = '#ebf4fa'
colors.link = '#0099e3'
Object.freeze(colors)


function LightenDarkenColor(col, amt) {

  let usePound = false

  if (col[0] == '#') {
    col = col.slice(1)
    usePound = true
  }

  let num = parseInt(col,16)

  let r = (num >> 16) + amt

  if (r > 255) r = 255
  else if  (r < 0) r = 0

  let b = ((num >> 8) & 0x00FF) + amt

  if (b > 255) b = 255
  else if  (b < 0) b = 0

  let g = (num & 0x0000FF) + amt

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound?'#':'') + (g | (b << 8) | (r << 16)).toString(16)
}

function lightOrDark(color) {

  // Variables for red, green, blue values
  let r, g, b, hsp

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {

    // If HEX --> store the red, green, blue values in separate variables
    color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/)

    r = color[1]
    g = color[2]
    b = color[3]
  }
  else {

    // If RGB --> Convert it to HEX: http://gist.github.com/983661
    color = +('0x' + color.slice(1).replace(
      color.length < 5 && /./g, '$&$&'))

    r = color >> 16
    g = color >> 8 & 255
    b = color & 255
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )

  // Using the HSP value, determine whether the color is light or dark
  if (hsp>127.5) {
    return true
  }
  else {

    return false
  }
}

export { colors as ColorPalette, LightenDarkenColor as ChangeLuminance, lightOrDark as CheckIfLightColor }
