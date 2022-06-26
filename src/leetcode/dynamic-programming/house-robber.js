/*
198. House Robber
https://leetcode.com/problems/house-robber/
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed,
the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and
it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount
of money you can rob tonight without alerting the police.

Example 1:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.


return nums.reduce(function(p, n) {
    return [p[1], Math.max(p[0] + n, p[1])];
}, [0,0])[1];


var rob = function(nums) {
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    let totals = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < nums.length; i ++){
        totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i]);
    }
    return totals[totals.length - 1];
};

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = (nums) => {
  switch (nums.length) {
    case 0:
      return 0
    case 1:
      return nums[0]
    case 2:
      return Math.max(nums[0], nums[1])
  }
  const totals = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i])
  }
  return totals.pop()
}

console.log(rob([1, 2])) // 2
console.log(rob([1, 1])) // 1
console.log(rob([1, 2, 3, 1])) // 1
console.log(rob([2, 7, 9, 3, 1])) // 1

const rob2 = (nums) => {
  console.log(nums)
  /*
    Runtime: 56 ms, faster than 100.00% of JavaScript online submissions for House Robber.
    Memory Usage: 33.8 MB, less than 25.89% of JavaScript online submissions for House Robber.
    O(n) time, O(1) space

    - Bottom up strategy
    - Iterative
    - Memoization

    Trick: At index [i], you only need to know the maximum profit at [i - 1] and [i - 2].
    This is a slight variation on fibonacci.
    */
  if (!nums.length) return 0
  if (nums.length === 1) return nums[0]
  if (nums.length === 2) return Math.max(nums[0], nums[1])

  let maxAtTwoBefore = nums[0]
  let maxAtOneBefore = Math.max(nums[0], nums[1])

  for (let i = 2; i < nums.length; i++) {
    console.log('maxAtTwoBefore: ', maxAtTwoBefore)
    console.log('maxAtOneBefore: ', maxAtOneBefore)
    console.log(
      `nums[i]: ${nums[i]} + maxAtTwoBefore: ${maxAtTwoBefore} or maxAtOneBefore: ${maxAtOneBefore}: `,
      nums[i] + maxAtTwoBefore,
      ' || ',
      maxAtOneBefore
    )

    const maxAtCurrent = Math.max(nums[i] + maxAtTwoBefore, maxAtOneBefore)
    console.log('maxAtCurrent: ', maxAtCurrent)
    maxAtTwoBefore = maxAtOneBefore
    maxAtOneBefore = maxAtCurrent
  }

  return maxAtOneBefore
}

// console.log(rob2([2, 7, 9, 3, 1]));

const rob3 = (nums) => {
  console.log(nums)
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  const totals = [nums[0], Math.max(nums[0], nums[1])]
  for (let i = 2; i < nums.length; i++) {
    console.log(nums)
    console.log(`i:  ${i}`)
    console.log('totals[i - 1]: ', totals[i - 1])
    console.log('totals[i - 2]: ', totals[i - 2])
    console.log('nums[i]: ', nums[i])
    console.log(
      `Comparing maximum between ${totals[i - 1]} and ${totals[i - 2]} + ${
        nums[i]
      } = ${totals[i - 2] + nums[i]}`
    )
    totals[i] = Math.max(totals[i - 1], totals[i - 2] + nums[i])
    console.log(`Writing difference: ${totals[i]}`)
    console.log('totals: ', totals)
    console.log('----')
  }
  return totals.pop()
}

// console.log(rob3([2, 7, 9, 3, 1]));
