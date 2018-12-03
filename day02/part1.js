const readFile = require('../input').readInput

const input = readFile('./input.txt')

function checkBoxId(boxId) {
  const charCount = boxId.split('').reduce((acc, char) => ({
    ...acc,
    [char]: acc[char] ? acc[char] + 1 : 1
  }), {})

  const has2 = Object.keys(charCount).some(char => charCount[char] === 2)
  const has3 = Object.keys(charCount).some(char => charCount[char] === 3)

  return [has2, has3]
}

const [count2, count3] = input.map(checkBoxId)
  .reduce((acc, [has2, has3]) => {
    return [
      acc[0] + (has2 ? 1 : 0),
      acc[1] + (has3 ? 1 : 0),
    ]
  }, [0, 0])

console.log(`${count2} x ${count3} = ${count2 * count3}`)
