/*
14. Longest Common Prefix
https://leetcode.com/problems/longest-common-prefix/
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Note:

All given inputs are in lowercase letters a-z.

 */

// Brilliant solution by linfongi (https://leetcode.com/linfongi/)
// https://leetcode.com/problems/longest-common-prefix/discuss/120133/Simple-JavaScript-solution
const longestCommonPrefix = (strs) => {
  if (!strs.length) return ''
  for (let i = 0; i < strs[0].length; i++) {
    for (const word of strs) {
      if (word[i] !== strs[0][i]) {
        return word.slice(0, i)
      }
    }
  }
  return strs[0]
}

module.exports = {
  solution: longestCommonPrefix,
}
