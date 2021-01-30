const pug = require('pug')
const path = require('path')

const render = () => pug.renderFile(path.join(__dirname, 'assets', 'template.pug'))

module.exports = {
  render
}
