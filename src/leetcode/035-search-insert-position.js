/*
35. Search Insert Position
https://leetcode.com/problems/search-insert-position/
Given a sorted array and a target value, return the index if the target is found.
If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
 */

const searchInsert = (nums, target) => {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        if (nums[0] > target) {
            return 0;
        }
        if (nums[0] < target) {
            return 1;
        }
    }
    const searchResult = nums.indexOf(target);
    if (searchResult !== -1) {
        return searchResult;
    }
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const next = nums[i + 1];

        if (target < curr ) {
            return 0;
        }

        if (target < curr && target > next) {
            return i + 1;
        }

        if (target > curr && target < next) {
            return i + 1;
        }

        if (next === undefined) {
            return i + 1;
        }
    }
};


module.exports = {
    solution: searchInsert,
};
