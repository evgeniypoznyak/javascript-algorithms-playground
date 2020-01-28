// Exercise 2

/*
 * Complete the 'splitArray' function below.
 *
 * The function is expected to return an array of arrays
 * The function accepts following parameters:
 *  1. ARRAY data - the input array of strings
 *  2. INTEGER max - the maximum total character length per array
 */

const solution = (data, max) => {
    const dataLength = data.length;

    // O(1)
    const finalResult = [];
    let charLength = 0;
    let buffer = [];


    // O(N)
    for (let i = 0; i < dataLength; i++) {
        if (data[i].length >= max) {
            finalResult.push(buffer);
            buffer = [];
            charLength = data[i].length;
            buffer.push(data[i]);
        } else {
                charLength = charLength + data[i].length;
                if (charLength <= max) {
                    buffer.push(data[i]);
                } else {
                    finalResult.push(buffer);
                    buffer = [];
                    charLength = data[i].length;
                    buffer.push(data[i]);
                }
            if (data[i+1] === undefined) {
                finalResult.push(buffer);
            }
            }
        }

    return finalResult;
};

module.exports = {
    solution: solution,
};
