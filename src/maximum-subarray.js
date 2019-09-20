const maxSubArray = nums => {
    for (let i = 1; i < nums.length; i++) {
        const numsCurrent = nums[i];
        const numsMinusOne = nums[i - 1];
        const numsMulti = numsCurrent + numsMinusOne;
        const result = Math.max(numsCurrent, numsMulti);
        nums[i] = result;
    }
    const final = Math.max(...nums);
    return final;
};


console.log(maxSubArray([8, -3, 2, 4]));
