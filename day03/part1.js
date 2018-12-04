const readFile = require('../input').readInput
const input = readFile('./input.txt')

function parseRow(row) {
  const [id, coords] = row.split('@').map(s => s.trim())
  const [position, size] = coords.split(':').map(s => s.trim())
  const [x, y] = position.split(',').map(Number)
  const [w, h] = size.split('x').map(Number)
  const right = x + (w-1)
  const left = x
  const top = y
  const bottom = y + (h-1)

  return { id, x, y , w, h, top, right, bottom, left }
}

function markCloth(patch, cloth, overlap) {
  const mark = {}
  for (let i = patch.left; i <= patch.right; i++) {
    for (let j = patch.top; j <= patch.bottom; j++) {
      let key = `${i},${j}`
      if (cloth[key]) {
        overlap[key] = true
      }
      cloth[key] = true
    }
  }
}

const result = input.reduce((acc, row) => {
  const patch = parseRow(row)
  markCloth(patch, acc.cloth, acc.overlap)
  
  return {
    patches: [ ...acc.patches, patch],
    overlap: acc.overlap,
    cloth: acc.cloth
  }
}, { patches: [], cloth: {}, overlap: {}})

console.log(Object.keys(result.overlap).length)