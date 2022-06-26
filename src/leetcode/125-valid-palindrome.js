/*
125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false


 */

// /**
//  * @param {string} s
//  * @return {boolean}
//  */
const isPalindrome = (s) => {
  const cleanString = s.match(/[a-zA-Z0-9]+/g)
  if (cleanString === null) return true
  const original = cleanString.join('').toLocaleLowerCase()
  const reversed = original.split('').reverse().join('')
  return original === reversed
  // const original = s.replace(/\W/g, '').toLocaleLowerCase();
  // console.log(original);
  // const reversed = original.split('').reverse().join('');
  // console.log(reversed);
  // return original === reversed;
}

module.exports = {
  solution: isPalindrome,
}
