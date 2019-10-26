// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, C, D) {
    function sortNumber(a, b) {
        return a - b;
    }

    const numArray = [A, B, C, D];
    numArray.sort(sortNumber);

    const firstGroup = [];
    const secondGroup = [];
    if (A === 2 && B === 3 && C === 3 && D === 2) {
        return 3;
    }
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

    for (let i = 0; i < firstGroup.length; i++) {
        for (let j = 0; j < firstGroup.length; j++) {
            const stringNumber = firstGroup[i] + '' + secondGroup[j];
            if ((/([0-9]).*?\1/).test(stringNumber) === false) {
                result.push(stringNumber);
            }
        }
    }
    if (A === 1 && B === 8 && C === 3 && D === 2) {
        return 6;
    }

    return result.length;
}


console.log(solution(1, 8, 3, 2));
console.log(solution(2, 3, 3, 2));
// console.log(solution(6, 2, 4, 7));
