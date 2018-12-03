const readInput = require('./shared').readInput

console.log(readInput().reduce((sum, val) => sum + val, 0))
