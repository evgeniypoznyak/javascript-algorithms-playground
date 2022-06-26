/*
168. Excel Sheet Column Title
https://leetcode.com/problems/excel-sheet-column-title/
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"
 */

// /**
//  * @param {number} n
//  * @return {string}
//  */

const convertToTitle = (n) => {
  const alphabetLettersCount = 26
  const charCodeStart = 65
  const number = n - 1

  const charCodeEnd = (number, alphabetLettersCount) =>
    number % alphabetLettersCount

  const getLetter = () =>
    String.fromCharCode(
      charCodeStart + charCodeEnd(number, alphabetLettersCount)
    )

  if (number < alphabetLettersCount) return getLetter()

  // if number is greater then do recursive call until number get smaller than alphabetLettersCount
  // then all recursive call will be concatenated in one return
  return convertToTitle(Math.floor(number / alphabetLettersCount)) + getLetter()
}

module.exports = {
  solution: convertToTitle,
}
