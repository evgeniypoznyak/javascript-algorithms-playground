// Exercise 4
const solution = A => {
    const length = A.length - 1;
    const map = {
        1: 0,
        3: 0,
        4: 0,
        7: 0,
    };
    for (let i = length; i >= 0; i--) {
        if (map[1] > 0 && map[3] > 0 && map[4] > 0 && map[7] > 0) {
            return i - 1;
        }
        if (i - 1 >= 0) {

        }

        if (A[i] === 1) {
            map[1] = map[1] + 1;
        }
        if (A[i] === 3) {
            map[3] = map[3] + 1;
        }
        if (A[i] === 4) {
            map[4] = map[4] + 1;
        }
        if (A[i] === 7) {
            map[7] = map[7] + 1;
        }
    }
};


module.exports = {
    solution: solution,
};
