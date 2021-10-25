const { customFontSize, customSpacer } = require('./config')

module.exports = {
  purge: {
    content: ['./*.php', './**/*.php'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: customFontSize,
    margin: customSpacer,
    padding: customSpacer,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
