// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

const solution = (A, B, C, D) => {
    function sortNumber(a, b) {
        return a - b;
    }

    const numArray = [A, B, C, D];
    numArray.sort(sortNumber);

    const firstGroup = [];
    const secondGroup = [];

    for (let i = 0; i < numArray.length; i++) {
        for (let j = 1; j < numArray.length; j++) {
            const stringNumber = numArray[i] + '' + numArray[j];
            if (stringNumber > 23 && stringNumber < 59) {
                secondGroup.push(stringNumber);
            }
            if (stringNumber < 23 && stringNumber > 0) {
                firstGroup.push(stringNumber);
            }
        }
    }

    if (firstGroup.length === 0) {
        return 0;
    }



    const result = [];
    console.log('numArray: ', numArray);
    const arrayToCahnge = numArray.splice();
    for (let i = 0; i < numArray.length; i++) {
        // todo
    }

    return result.length;
};


console.log('6: ', solution(1, 8, 3, 2)); // 6
console.log('3: ', solution(2, 3, 3, 2)); // 3
console.log('0: ', solution(6, 2, 4, 7)); // 0

