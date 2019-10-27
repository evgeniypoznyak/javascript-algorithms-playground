
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
    const arrayToChange = numArray.slice();
    const length = arrayToChange.length;
    for (let i = 0; i < length; i++) {



    }

    return result.length;
};


module.exports = {
    solution: solution,
};
