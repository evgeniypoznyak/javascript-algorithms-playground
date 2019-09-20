/*
https://leetcode.com/problems/move-zeroes/description/
283. Move Zeroes
Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
    const zeros = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(nums[i]);
            nums.splice(i, 1);
            i--;
        }
    }
    nums.push(...zeros);
};

const moveZeroesBackwards = nums => {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
    return nums;
};

const nums = [0, 0, 1, 0, 2, 0, 1, 0];
moveZeroes(nums);
console.log(nums);
moveZeroesBackwards(nums);
console.log(nums);
