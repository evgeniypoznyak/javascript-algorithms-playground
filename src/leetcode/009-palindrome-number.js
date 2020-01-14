/*
9. Palindrome Number
https://leetcode.com/problems/palindrome-number/

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:

Could you solve it without converting the integer to a string?
 */


/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
    if (x < 0) return false; // only positive number
    if (x < 10) return true; // for 1-9 cases
    if (x % 10 === 0) return false; // in case of last 0 [3330, 123320, 1000, etc]
    let rev = 0; // reversed number
    while (x >= 10) {
        const cur = x % 10;
        rev = rev * 10 + cur;
        if (x === rev) return true; // check before changing

        // better replace for Math.floor(), bit operator '~' inverts all the bits in your
        // number and in the process converts the number to an int
        x = ~~(x / 10);

        if (x === rev) return true; // check after changing
        if (x < rev) return false; // stop in case reversed number becomes greater than original value
    }
    return false; // the longest case (diff in the middle) // [77778777, 10004001]
};


module.exports = {
    solution: isPalindrome,
};
