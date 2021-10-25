const { pxToRem } = require('./utils')

const customSpacer = (function() {
  const min = 0
  const max = 200
  const increment = 1
  const spacer = {
    'auto': 'auto',
    '0': '0'
  }

  let i = min

  while(i <= max) {
    spacer.margin[`${i}px`] = `${pxToRem(i)}rem`
    spacer.margin[`n-${i}px`] = `-${pxToRem(i)}rem`
    spacer.padding[`${i}px`] = `${pxToRem(i)}rem`
    spacer.padding[`n-${i}px`] = `-${pxToRem(i)}rem`
    i += increment
  }
  return spacer
})()

module.exports = customSpacer
