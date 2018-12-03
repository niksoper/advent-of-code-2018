const fs = require('fs')

module.exports = {
  readInput: filePath => fs.readFileSync(filePath, 'utf8')
    .split('\n')
}
