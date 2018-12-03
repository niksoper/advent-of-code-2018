const fs = require('fs')

module.exports = {
  readInput: () => fs.readFileSync('./input.txt', 'utf8')
    .split('\n')
    .map(line => +line)
}
