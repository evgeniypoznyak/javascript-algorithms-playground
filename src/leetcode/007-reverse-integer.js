/*
7. Reverse Integer
https://leetcode.com/problems/reverse-integer/

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range:
[−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0
when the reversed integer overflows.

 */


/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
    const minimum = -2147483648;
    const maximum = 2147483647;

    if (x === 0) {
        return 0;
    }

    if (x < minimum) {
        return 0;
    }

    if (x > maximum) {
        return 0;
    }
    let result;

    result = Math.sign(x) * parseInt(x.toString().split('').reverse().join(''));

    if (result > maximum) {
        result = 0;
    }
    if (result < minimum) {
        result = 0;
    }
    return result;
};

module.exports = {
    solution: reverse,
};
