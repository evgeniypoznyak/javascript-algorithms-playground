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

const arr4 = require('./example1');

const containsDuplicate = nums => {
    for (let i = 0; i < nums.length; i++) {
        let duplicate = 0;
        nums.map(e => {
            if (e === nums[i]) {
                duplicate++;
            }
        });
        if (duplicate < 2) {
            duplicate = 0;
        } else {
            return true;
        }
    }
    return false;
};

const arr1 = [1, 2, 3, 1]; // true
const arr2 = [1, 2, 3, 4]; // false
const arr3 = [1, 2, 3, 1]; // true


console.log(containsDuplicate(arr1));
console.log(containsDuplicate(arr2));
console.log(containsDuplicate(arr3));
console.log(arr4.length);
// console.log(containsDuplicate(arr4));


