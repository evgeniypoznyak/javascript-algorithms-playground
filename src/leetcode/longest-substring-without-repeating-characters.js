/*
3. Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string, find the length of the longest substring without repeating characters.

Example 1:
Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    const combinations = [];
    if (s.length === 0) {
        return 0;
    }
    const string = s.trim().toLocaleLowerCase();

    if (string.length === 0 || string.length === 1) {
        return 1;
    }

    const arr = string.split('');

    let result = arr.shift();
    const arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {
        const nextLetter = arr.shift();
        if (nextLetter) {
            if (!result.includes(nextLetter)) {
                result = result + nextLetter;
                combinations.push(result.length);
            } else {
                combinations.push(result.length);
                result = nextLetter;
            }
        }
    }
    return Math.max(...combinations);
};

/*
function lengthOfLongestSubstring(s) {
    const map = {};
    var left = 0;

    return s.split('').reduce((max, v, i) => {
        left = map[v] >= left ? map[v] + 1 : left;
        map[v] = i;
        return Math.max(max, i - left + 1);
    }, 0);
}
 */


/*
var lengthOfLongestSubstring = function(s) {
  var start = 0, maxLen = 0;
  var map = new Map();

  for(var i = 0; i < s.length; i++) {
      var ch = s[i];

      if(map.get(ch) >= start) start = map.get(ch) + 1;
      map.set(ch, i);

      if(i - start + 1 > maxLen) maxLen = i - start + 1;
  }

  return maxLen;
};
 */

module.exports = {
    lengthOfLongestSubstring,
};
