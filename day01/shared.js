const readFile = require('../input').readInput

module.exports = {
  readInput: () => readFile('./input.txt').map(line => +line)
}
