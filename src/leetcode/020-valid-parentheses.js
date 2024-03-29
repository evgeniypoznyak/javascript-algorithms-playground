/*
20. Valid Parentheses
https://leetcode.com/problems/valid-parentheses/
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
/*
var isValid = function(s) {

};
 */

const isValid = (s) => {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  const stack = []

  for (let i = 0; i < s.length; i++) {
    const el = s[i]
    // continue until if open bracket are exists
    if (map[el]) {
      stack.push(map[el])
    } else {
      // if not matched bracket found then, looking for closing
      const poppedEl = stack.pop()
      if (el !== poppedEl) {
        return false
      }
    }
  }
  return stack.length === 0
}

module.exports = {
  solution: isValid,
}
