// hackerrank Exercise 1

const solution = (data, max) => {
    // from description:  max will never be less than 1
    const dataLength = data.length;
    // cover basic array
    if (dataLength <= max) {
        return data;
    }
    // O(1)
    const finalResult = [];

    // O(N)
    for (let i = 0; i < dataLength; i = i + max) {
        finalResult.push(data.slice(i, i + max));
    }

    return finalResult;
};


module.exports = {
    solution: solution,
};
