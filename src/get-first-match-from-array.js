class Hash {
    constructor() {
        this.values = {};
    }

    has(v) {
        return this.values[v] !== undefined;
    }

    set(value, index) {
        this.values[value] = index;
    }

    get(v) {
        return this.values[v];
    }
}

const findDuplicates = nums => {
    const hash = new Hash();

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return [
                {
                    value: nums[hash.get(nums[i])],
                    index: hash.get(nums[i]),
                },
                {
                    value: nums[i],
                    index: i,
                },
            ];
        }
        hash.set(nums[i], i);
    }
};

const nums = [1, 2, 3, 6, 5, 7, 3];

console.log(findDuplicates(nums));
