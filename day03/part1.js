const input = [
  '#1299 @ 621,742: 13x11',
  '#1300 @ 746,592: 27x19',
  '#1301 @ 551,561: 14x29',
  '#1302 @ 563,818: 11x29',
]

function parseRow(row) {
  const [id, coords] = row.split('@').map(s => s.trim())
  const [position, size] = coords.split(':').map(s => s.trim())
  const [x, y] = position.split(',').map(Number)
  const [w, h] = size.split('x').map(Number)
  const right = x + w
  const left = x
  const top = y
  const bottom = y + h

  return { id, x, y , w, h, top, right, bottom, left }
}

const patches = input.map(parseRow)
