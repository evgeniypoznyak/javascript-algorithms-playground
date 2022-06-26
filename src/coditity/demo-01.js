/*
https://app.codility.com/c/run/demo3FDEVM-73R/
This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// const solution = A => {
//     if (A.length === 0) {
//         return 1;
//     }
//
//     const missingNumbers = [];
//     const max = A.reduce((a, b) => Math.max(a, b));
//     if (max < 1) {
//         return 1;
//     }
//
//     for (let i = 1; i < max + 2; i++) {
//         if (i === 1) {
//             const result = A.find(el => el === i);
//             if (result === undefined) {
//                 return 1;
//             }
//         }
//
//         const result = A.find(el => el === i);
//         if (result === undefined) {
//             missingNumbers.push(i);
//         }
//     }
//     return missingNumbers.reduce((a, b) => Math.min(a, b));
// };

const solution = (A) => {
  if (A.length === 0) {
    return 1
  }

  const max = A.reduce((a, b) => Math.max(a, b))
  if (max < 1) {
    return 1
  }

  const sortedUniqueArray = Array.from(new Set(A))
    .filter((el) => el > 0)
    .sort((a, b) => a - b)

  for (let i = 0; i < sortedUniqueArray.length; i++) {
    if (sortedUniqueArray[i + 1] - sortedUniqueArray[i] > 1) {
      return sortedUniqueArray[i] + 1
    }
  }
  return sortedUniqueArray.pop() + 1
}

module.exports = {
  solution,
}
