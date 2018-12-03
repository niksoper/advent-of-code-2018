const readFile = require('../input').readInput

const input = readFile('./input.txt').map(boxId => boxId.split(''))

const diff = (a, b) => a.reduce((acc, A, i) => A === b[i] ? acc : acc + 1, 0)

function findDiffOf(target, boxIds) {
  for (let a of boxIds) {
    for (let b of boxIds) {
      if (diff(a, b) === target) {
        return [a.join(''), b.join('')]
      }
    }
  }
}

console.log(findDiffOf(1, input))
