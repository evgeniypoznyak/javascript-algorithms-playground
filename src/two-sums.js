// O(n) - One-pass Hash Table
const twoSumOld = function(nums, target) {
    const map = new Map;
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};

const twoSum2Old = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [nums[map.get(complement)], nums[i]];
        }
        map.set(nums[i], i);
    }
};

class Hash {
    constructor() {
        this.values = {};
    }

    has(v) {
        return this.values[v] !== undefined;
    }

    set(value, index1, index2) {
        this.values[value] = [index1, index2];
    }

    get(v) {
        return this.values[v];
    }
}

const twoSum3Values = (nums, target) => {
    const hash = new Hash();

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (hash.has(nums[i])) {
            return [nums[hash.get(nums[i])], nums[i]];
        }
        hash.set(difference, i);
    }
};

const twoSum = (nums, target) => {
    const hash = new Hash();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (hash.has(nums[i])) {
            return [hash.get(nums[i]), i];
        }
        hash.set(difference, i);
    }
};

const nums = [3, 6];
const target = 9;
console.log(twoSumOld(nums, target));
console.log(twoSum2Old(nums, target));
console.log(twoSum3Values(nums, target));
console.log(twoSum(nums, target));
