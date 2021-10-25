const { customFontSize, customSpacer } = require('./config')

module.exports = {
  purge: {
    content: ['./*.php', './**/*.php'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: customFontSize,
    margin: customSpacer.margin,
    padding: customSpacer.padding,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
