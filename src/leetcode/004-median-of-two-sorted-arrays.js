/*
4. Median of Two Sorted Arrays
https://leetcode.com/problems/median-of-two-sorted-arrays/
https://leetcode.com/problems/median-of-two-sorted-arrays/discuss/278326/javascript-100

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
 */

const isEven = (n) => n % 2 === 0

const isOdd = (n) => Math.abs(n % 2) === 1

const findMedianFromOneArray = (arr) => {
  if (isOdd(arr.length)) {
    const medianIndex = Math.floor(arr.length / 2)
    return arr[medianIndex]
  }
  if (isEven(arr.length)) {
    const medianIndex = Math.floor(arr.length / 2)
    const diff = (arr[medianIndex] - arr[medianIndex - 1]) / 2
    return arr[medianIndex - 1] + diff
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  if (nums1.length === 0 && nums2.length === 0) {
    return 0
  }
  if (nums1.length === 0) {
    return findMedianFromOneArray(nums2)
  }
  if (nums2.length === 0) {
    return findMedianFromOneArray(nums1)
  }
}

module.exports = {
  solution: findMedianSortedArrays,
}
