const { pxToRem } = require('./utils')

const customFontSize = (function() {
  const min = 10
  const max = 100
  const increment = 1
  const fontSize = {}

  let i = min

  while(i <= max) {
    fontSize[`${i}px`] = `${pxToRem(i)}rem`
    i += increment
  }
  return fontSize
})()

module.exports = customFontSize
