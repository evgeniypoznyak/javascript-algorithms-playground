/*
136. Single Number
https://leetcode.com/problems/single-number/
Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1

Example 2:

Input: [4,1,2,1,2]
Output: 4


 */

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
const singleNumber = nums => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = hash[nums[i]] !== undefined;
    }
    for (const key in hash) {
        if (hash.hasOwnProperty(key) && hash[key] === false) return key * 1;
    }

// let result = 0;
// Object.entries(hash).forEach(([key, value]) => {
//     if (value === false) {
//         return result = key * 1;
//     }
// });
// return result;
};

module.exports = {
    solution: singleNumber,
};
