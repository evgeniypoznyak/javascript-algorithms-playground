/*
70. Climbing Stairs
https://leetcode.com/problems/climbing-stairs/
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
Accepted
 */

let calculations1 = 0
let calculations2 = 0

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  if (n <= 3) {
    return n
  }
  const steps = [1, 2, 3]
  for (let i = 3; i < n; i++) {
    calculations1++
    steps.push(steps[i - 1] + steps[i - 2])
  }
  return steps.pop()
}
/*
Runtime: 56 ms, faster than 41.98% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 33.8 MB, less than 64.00% of JavaScript online submissions for Climbing Stairs.

Runtime: 52 ms, faster than 69.84% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 33.8 MB, less than 92.00% of JavaScript online submissions for Climbing Stairs.
 */

// space complexity: O(n)
const climbStairsFactory = () => {
  const cache = {}
  return function calculateStairs(n) {
    calculations2++
    if (n <= 3) {
      return n
    }
    if (n in cache) {
      return cache[n]
    }
    cache[n] = calculateStairs(n - 1) + calculateStairs(n - 2)
    return cache[n]
  }
}

console.log(climbStairs(45))
console.log('calculations1: ', calculations1)

const calculateSteps = climbStairsFactory()
console.log(calculateSteps(45))
console.log('calculations2: ', calculations2)
