/*
 * Complete the 'getMinimumDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY parcels as parameter.
 */

function getMinimumDays(parcels) {
  if (parcels.length === 0) {
    return 0
  }
  if (parcels.every((parcel) => parcel === parcels[0])) {
    return 1
  }

  let steps = 0
  do {
    steps++
    const lowest = minPackage(parcels)
    parcels = parcels.map((parcel) => {
      return parcel - lowest
    })
    // iterate through the parcels array and remove elemets that equal or less than 0
    parcels = parcels.filter((parcel) => {
      return parcel > 0
    })
  } while (parcels.length > 1)

  return steps
}

function minPackage(array) {
  return array.reduce((lowest, parcel) => {
    return parcel < lowest ? parcel : lowest
  }, array[0])
}

module.exports = {
  solution: getMinimumDays,
}
