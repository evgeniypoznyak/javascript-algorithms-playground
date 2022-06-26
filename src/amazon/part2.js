/*
 * Complete the 'findTotalPower' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY power as parameter.
 */

function findTotalPower(power) {
  // With more open test examples I could complete this exercise

  if (power.length === 0) {
    return 0
  }
  if (power.every((parcel) => parcel === power[0])) {
    return power[0]
  }
  const results = []
  for (let i = 0; i < power.length; i++) {
    const cache = []
    for (let j = i; j < power.length; j++) {
      cache.push(power[j])
      const operation = minElement(cache) * sum(cache)
      results.push(operation)
    }
  }
  return Math.max(sum(results))
}

function minElement(array) {
  return array.reduce((lowest, parcel) => {
    return parcel < lowest ? parcel : lowest
  }, array[0])
}

function sum(array) {
  return array.reduce((total, element) => {
    return total + element
  }, 0)
}

module.exports = {
  solution: findTotalPower,
}
