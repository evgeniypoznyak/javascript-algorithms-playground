// O(n) - One-pass Hash Table
const twoSum = function(nums, target) {
    const map = new Map;
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};

const twoSum2 = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [nums[map.get(complement)], nums[i]];
        }
        map.set(nums[i], i);
    }
};

const nums = [1, 2, 11, 15, 7, 3, 6];
const target = 9;
console.log(twoSum(nums, target));
console.log(twoSum2(nums, target));
