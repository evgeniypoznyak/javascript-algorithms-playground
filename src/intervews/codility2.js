
const isHour = number => {
    return number > -1 && number < 24;
};

const isValidTime = number => {
    return number > -1 && number < 60;
};

const sortNumber = (a, b) => a - b;

const solution = (A, B, C, D) => {
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
    // console.log('firstGroup: ', firstGroup);
    // console.log('secondGroup: ', secondGroup);


    const properVariations = [];
    // console.log('numArray: ', numArray);
    const arrayToChange = numArray.slice();
    const length = arrayToChange.length;
    for (let i = 0; i < length; i++) {
        if (arrayToChange[i + 1]) {
            const numberToCheckInOrder = arrayToChange[i] + '' + arrayToChange[i + 1];
            const numberToCheckNotInOrder = arrayToChange[i + 1] + '' + arrayToChange[i];
            if (isValidTime(numberToCheckInOrder)) {
                properVariations.push({
                    value: numberToCheckInOrder,
                    index1: i,
                    index2: i + 1,
                });
            }
            if (isValidTime(numberToCheckNotInOrder)) {
                properVariations.push({
                    value: numberToCheckNotInOrder,
                    index1: i + 1,
                    index2: i,
                });
            }

            for (let j = i + 2; j < length; j++) {
                const numberToCheckInOrderJ = arrayToChange[i] + '' + arrayToChange[j];
                const numberToCheckNotInOrderJ = arrayToChange[j] + '' + arrayToChange[i];
                if (isValidTime(numberToCheckInOrderJ)) {
                    properVariations.push({
                        value: numberToCheckInOrderJ,
                        index1: i,
                        index2: j,
                    });
                }
                if (isValidTime(numberToCheckNotInOrderJ)) {
                    properVariations.push({
                        value: numberToCheckNotInOrderJ,
                        index1: j,
                        index2: i,
                    });
                }
            }
        }
    }

    // console.log(properVariations);
    const testArr = [];

    // if (properVariations[0].value >= 24) {
    //     return 0;
    // }

    for (let i = 0; i < properVariations.length; i++) {
        const numArrayCopy = numArray.slice();
        delete numArrayCopy[properVariations[i].index1];
        delete numArrayCopy[properVariations[i].index2];
        // console.log('numArrayCopy: ', numArrayCopy);
        for (let j = i; j < properVariations.length; j++) {
            if (
                isHour(parseInt(properVariations[j].value)) &&
                numArrayCopy[properVariations[j].index1] !== undefined &&
                numArrayCopy[properVariations[j].index2] !== undefined
            ) {
                testArr.push({
                    value: properVariations[j].value + '' + properVariations[i].value,
                    ind: [
                        properVariations[j].index1,
                        properVariations[j].index2,
                        properVariations[i].index1,
                        properVariations[i].index2,
                    ],
                });
            }

            if (
                isHour(parseInt(properVariations[i].value)) &&
                numArrayCopy[properVariations[j].index1] !== undefined &&
                numArrayCopy[properVariations[j].index2] !== undefined
            ) {
                testArr.push({
                    value: properVariations[i].value + '' + properVariations[j].value,
                    ind: [
                        properVariations[i].index1,
                        properVariations[i].index2,
                        properVariations[j].index1,
                        properVariations[j].index2,
                    ],
                });
            }
        }
    }

    // console.log('testArr: ', testArr);
    const setVal = new Set();
    for (let i = 0; i < testArr.length; i++) {
        setVal.add(testArr[i].value);
    }

    return setVal.size;
};


module.exports = {
    solution: solution,
};
