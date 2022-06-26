/*
167. Two Sum II - Input array is sorted
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
Given an array of integers that is already sorted in ascending order,
find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target,
where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
Example:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
 */

// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
const twoSum = (numbers, target) => {
  let leftIndex = 0
  let rightIndex = numbers.length - 1

  while (numbers[leftIndex] + numbers[rightIndex] !== target) {
    if (numbers[leftIndex] + numbers[rightIndex] < target) {
      leftIndex++
    }
    if (numbers[leftIndex] + numbers[rightIndex] > target) {
      rightIndex--
    }
  }
  return [leftIndex + 1, rightIndex + 1]

  // //linfongi solution
  // // https://leetcode.com/linfongi/
  // let l = 0;
  // let r = numbers.length - 1;
  //
  // for (;;) {
  //     const sum = numbers[l] + numbers[r];
  //
  //     if (sum === target) {
  //         return [l + 1, r + 1];
  //     }
  //
  //     if (sum < target) {
  //         l++;
  //     } else {
  //         r--;
  //     }
  // }
}

module.exports = {
  solution: twoSum,
}
