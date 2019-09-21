/*
217. Contains Duplicate
https://leetcode.com/problems/contains-duplicate/description/

Given an array of integers, find if the array contains any duplicates.
Your function should return true if any value appears at least twice in the array,
and it should return false if every element is distinct.

Input: [1,2,3,1]
Output: true

Input: [1,2,3,4]
Output: false

Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
 */

const containsDuplicateOLD = nums => {
    if (!Array.isArray(nums) || nums.length < 2) {
        return false;
    }
    for (let i = nums.length; i >= nums.length; i--) {
        const needle = nums.pop();
        if (nums.find(el => el === needle) !== undefined) {
            return true;
        }
    }

    return false;
};

const containsDuplicate = nums => nums.length !== new Set(nums).size;

const arr1 = [0, 0, 3, 1]; // true
const arr2 = [1, 2, 0, 0]; // true
const arr3 = [0, 2, -5, 0]; // true
const arr4 = []; // false
const arr5 = [3, 1]; // false


console.log(containsDuplicate(arr1));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));
console.log(containsDuplicate(arr4));
console.log(containsDuplicate(arr5));


