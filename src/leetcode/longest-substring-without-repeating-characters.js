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

class HashMap {
    constructor() {
        this.values = {};
    }

    has(v) {
        return this.values[v] !== undefined;
    }

    set(value) {
        this.values[value] = value;
    }

    get(v) {
        return this.values[v];
    }

    remove(key) {
        delete this.values[key];
    }

    size() {
        return Object.keys(this.values).length;
    }
}

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = s => {
    if (s.length === 0) {
        return 0;
    }
    const hashMap = {};
    let left = 0;
    let right = 0;
    let max = 0;

    while (right < s.length) {
        const rChar = s[right];
        const lChar = s[left];
        if (hashMap[rChar] === undefined) {
            hashMap[rChar] = right;
            right++;
            max = Math.max(max, Object.keys(hashMap).length);
        } else {
            delete hashMap[lChar];
            left++;
        }
    }

    return max;
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
