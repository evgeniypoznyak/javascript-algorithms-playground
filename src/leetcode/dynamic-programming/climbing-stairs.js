/*
70. Climbing Stairs
https://leetcode.com/problems/climbing-stairs/
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Note: Given n will be a positive integer.

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
Accepted
 */


/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
    if (n <= 3) {
        return n;
    }
    const result = [];

    for (let i = 0; i < n; i++) {

    }
};

let calculations1 = 0;
let calculations2 = 0;
// const calculations3 = 0;

const climbStairs2 = n => {
    if (n <= 3) {
        return n;
    }
    const steps = [1, 2, 3];
    for (let i = 3; i < n; i++) {
        calculations1++;
        steps.push(steps[i - 1] + steps[i - 2]);
    }
    return steps.pop();
};

console.log(climbStairs2(45));

const climbStairsFactory = () => {
    const cache = {};
    return function calculateStairs(n) {
        calculations2++;
        if (n <= 3) {
            return n;
        }
        cache[n] = calculateStairs(n - 1) + calculateStairs(n - 2);
        return cache[n];
    };
};

const calculateSteps = climbStairsFactory();
console.log(calculateSteps(45));


console.log('calculations1: ', calculations1);
console.log('calculations2: ', calculations2);
// console.log(climbStairs2(8));

// climbStairs(1); // 1
// climbStairs(2); // 2
// climbStairs(3); // 3
// climbStairs(4); // 5
// 1 + 1 + 1 + 1
// 2 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 2
// climbStairs(5); // 8
// climbStairs(6); // 13
// climbStairs(7); // 21
// climbStairs(8); // 34
