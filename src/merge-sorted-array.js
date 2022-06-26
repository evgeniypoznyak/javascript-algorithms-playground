const isAllArraysValid = (arr1, arr2) =>
  Array.isArray(arr1) &&
  Array.isArray(arr2) &&
  arr1.length > 0 &&
  arr2.length > 0

function processItem(resultArray, arrayItem, arr, index) {
  resultArray.push(arrayItem)
  arrayItem = arr[index]
  return arrayItem
}

function processArrays(arrayItem1, arrayItem2, resultArray, arr1, i, arr2, j) {
  while (arrayItem1 || arrayItem2) {
    if (arrayItem1 < arrayItem2) {
      arrayItem1 = processItem(resultArray, arrayItem1, arr1, i)
      i++
    } else {
      arrayItem2 = processItem(resultArray, arrayItem2, arr2, j)
      j++
    }
  }
}

const mergeSortedArrays = (arr1, arr2) => {
  const resultArray = []
  if (isAllArraysValid(arr1, arr2)) {
    const arrayItem1 = arr1[0]
    const arrayItem2 = arr2[0]
    const i = 1
    const j = 1
    processArrays(arrayItem1, arrayItem2, resultArray, arr1, i, arr2, j)
  }
  return resultArray
}

const arr1 = [1, 2, 4]
const arr2 = [3, 6, 32, 40]

console.log(mergeSortedArrays(arr1, arr2))
