/*
169. Majority Element
https://leetcode.com/problems/majority-element/
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */

const majorityElement = nums => {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }
    let maximumValue = Number.MIN_SAFE_INTEGER;
    let result = Number.MIN_SAFE_INTEGER;
    for (const [key, value] of Object.entries(hash)) {
        if (value > maximumValue) {
            result = key * 1;
            maximumValue = value;
        }
    }
    return result;
};

module.exports = {
    solution: majorityElement,
};
