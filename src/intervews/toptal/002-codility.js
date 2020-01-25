// Exercise 2

const solution = A => {
    const smaller = A => {
        let counter = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i + 1] !== undefined) {
                if (i % 2 === 0) {
                    if (A[i] > A[i + 1]) {
                        counter++;
                    }
                }
            }
        }
        return counter;
    };

    const bigger = A => {
        let counter = 0;
        for (let i = 0; i < A.length; i++) {
            if (A[i + 1] !== undefined) {
                if (i % 1 === 0) {
                    if (A[i] < A[i + 1]) {
                        counter++;
                    }
                }
            }
        }
        return counter;
    };
    let result = 0;
    if (A.length > 1) {
        if (A[0] < A[1]) {
            result = smaller(A);
        }
        if (A[0] > A[1]) {
            result = bigger(A);
        }
    }
    return result;
};

module.exports = {
    solution: solution,
};
