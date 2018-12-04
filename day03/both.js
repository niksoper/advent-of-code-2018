// const readFile = require('../input').readInput
// const input = readFile('./input.txt')

const input = [
  '#1 @ 0,0: 3x1',
  '#2 @ 1,0: 1x3',
  '#3 @ 0,5: 1x3'
]

function patchSquares(top, right, bottom, left) {
  const squares = {}
  for (let i = left; i <= right; i++) {
    for (let j = top; j <= bottom; j++) {
      let key = `${i},${j}`
      squares[key] = true
    }
  }

  return squares
}

function parseRow(row) {
  const [id, coords] = row.split('@').map(s => s.trim())
  const [position, size] = coords.split(':').map(s => s.trim())
  const [x, y] = position.split(',').map(Number)
  const [w, h] = size.split('x').map(Number)
  const right = x + (w-1)
  const left = x
  const top = y
  const bottom = y + (h-1)
  const squares = patchSquares(top, right, bottom, left)

  return { id, top, right, bottom, left, squares }
}


function markCloth(patches, cloth) {
  for (let patch of patches) {
    for (let square of Object.keys(patch.squares)) {
      if (cloth[square]) {
        patch.squares = patch.sq
      }
      let clothSquare = cloth[square] || {}
      clothSquare[patch.id] = true
      cloth[square] = clothSquare
    }
  }

  return cloth
}

const patches = input.map(parseRow)
console.log(patches)

const firstPass = markCloth(patches, {})
console.log(firstPass)
const part1 = Object.keys(firstPass).filter(key => Object.keys(firstPass[key]).length > 1).length
console.log(part1)

// const secondPass = markCloth(patches, firstPass)
// console.log(secondPass)
// const part2 = Object.keys(secondPass)
//   .map(key => Object.keys(secondPass[key]))
//   .filter(x => x.length === 1)
  
// console.log(part2)
