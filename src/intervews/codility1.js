// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  const sentences = S.split(/[\\.!?]/)
  let highestNumber = 0
  for (let i = 0; i < sentences.length; i++) {
    const arrayToCheck = sentences[i].match(/.*?[\\.\s]+?/g)
    if (arrayToCheck !== null) {
      const wordsLength = arrayToCheck.length
      if (highestNumber < wordsLength) {
        highestNumber = wordsLength
      }
    }
  }
  return highestNumber
}

console.log(solution('We test coders. Give us a try?'))
console.log(solution('Forget  CVs..Save time . x x'))
