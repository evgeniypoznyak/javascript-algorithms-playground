const fs = require('fs')
const fileContent = fs.readFileSync(__dirname + '/001.reduce.txt', 'utf8')

const processFile = () => {
  const result = fileContent
    .trim()
    .split('\n')
    .map((line) => line.split('|'))
    .reduce((customers, line) => {
      const inventory = {
        name: line[1],
        price: line[2],
        quantity: line[3],
      }
      customers[line[0]] = customers[line[0]] || []
      customers[line[0]].push(inventory)
      return customers
    }, {})
  // console.log(JSON.stringify(result, null, 2));
  return result
}

module.exports = {
  solution: processFile,
}
