// unique values of sum all element by given argument and not greater than argument.

const solution = (N) => {
  const arr = []
  for (let i = 0; i < N; i++) {
    const a = N - (N - i + (N - i))
    if (arr.length === 0) {
      arr.push(a * -1)
    } else {
      arr.push(a)
    }
  }
  const arrSum = arr.reduce((a, b) => a + b, 0)
  console.log(arrSum)
  return arr
}

console.log(solution(99))
