// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(ranks) {
  function sortNumber(a, b) {
    return a - b
  }

  ranks.sort(sortNumber)
  let result = 0
  for (let i = 0; i < ranks.length; i++) {
    if (ranks[i] !== ranks[i + 1]) {
      result++
    }
  }
  return result
}

console.log(solution([3, 4, 3, 0, 2, 2, 3, 0, 0])) // 5
console.log(solution([4, 4, 3, 3, 1, 0])) // 3
console.log(solution([4, 2, 0])) // 0
