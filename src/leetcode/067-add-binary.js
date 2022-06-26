/*
67. Add Binary
https://leetcode.com/problems/add-binary/
Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"
 */

// /**
//  * @param {string} a
//  * @param {string} b
//  * @return {string}
//  */

const addBinary = (a, b) => {
  const aBin = `0b${a}`
  const bBin = `0b${b}`
  // eslint-disable-next-line no-undef
  const sum = BigInt(aBin) + BigInt(bBin)
  // BigInt('0b' + a) + BigInt('0b' + b)

  return sum.toString(2)
}

module.exports = {
  solution: addBinary,
}
