// Exercise 2

const solution = (A) => {
  const smaller = (A) => {
    let counter = 0
    const ifSmallerWrong = (A, i) =>
      A[i + 1] !== undefined && i % 2 === 0 && A[i] > A[i + 1]
    for (let i = 0; i < A.length; i++) {
      if (ifSmallerWrong(A, i)) {
        counter++
      }
    }
    return counter
  }

  const bigger = (A) => {
    let counter = 0
    const ifBiggerWrong = (i) =>
      A[i + 1] !== undefined && i % 1 === 0 && A[i] < A[i + 1]
    for (let i = 0; i < A.length; i++) {
      if (ifBiggerWrong(i)) {
        counter++
      }
    }
    return counter
  }
  let result = 0
  if (A.length > 1) {
    if (A[0] < A[1]) {
      result = smaller(A)
    }
    if (A[0] > A[1]) {
      result = bigger(A)
    }
  }
  return result
}

module.exports = {
  solution: solution,
}
