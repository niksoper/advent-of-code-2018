const readInput = require('./shared').readInput

const inputs = readInput()

function process(next, seen) {
  for (let val of inputs) {
    next += val
    if (seen[next]) {
      return next
    }
    seen[next] = true
  }
  return process(next, seen)
}

console.log(process(0, {}))
