const isMinute = number => {

};

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

    const properVariations = [];
    console.log('numArray: ', numArray);
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

    console.log(properVariations);
    let finalResult = 0;
    const testArr = [];

    if (properVariations[0].value >= 24) {
        return 0;
    }

    for (let i = 0; i < properVariations.length; i++) {
        const numArrayCopy = numArray.slice();
        delete numArrayCopy[properVariations[i].index1];
        delete numArrayCopy[properVariations[i].index2];
        console.log('numArrayCopy: ', numArrayCopy);
        for (let j = i; j < properVariations.length; j++) {
            if (
                isHour(parseInt(properVariations[i].value)) &&
                numArrayCopy[properVariations[j].index1] !== undefined &&
                numArrayCopy[properVariations[j].index2] !== undefined
            ) {
                // console.log('numArrayCopy[jValue.index1]: ', numArrayCopy[jValue.index1]);
                // console.log('numArrayCopy[jValue.index2]: ', numArrayCopy[jValue.index2]);
                testArr.push({
                    value: properVariations[i].value + '' + properVariations[j].value,
                    ind: [
                        properVariations[i].index1,
                        properVariations[i].index2,
                        properVariations[j].index1,
                        properVariations[j].index2,
                    ],
                });
                finalResult++;
            }
        }
    }

    // const keys = Object.keys(properVariations);

    // for (let i = 0; i < keys.length; i++) {
    //     const iValue = properVariations[keys[i]];
    //     const numArrayCopy = numArray.slice();
    //     console.log('numArrayCopy: ', numArrayCopy);
    //     // console.log(`${keys[i]}:`, iValue);
    //     delete numArrayCopy[iValue.index1];
    //     delete numArrayCopy[iValue.index2];
    //     console.log('numArrayCopy: ', numArrayCopy);
    //
    //     for (let j = i+1; j < keys.length; j++) {
    //         const jValue = properVariations[keys[j]];
    //         // console.log('keys[j]: ', keys[j]);
    //         // console.log('properVariations[keys[j]]: ', jValue);
    //         if (numArrayCopy[jValue.index1] !== undefined && numArrayCopy[jValue.index2] !== undefined) {
    //             console.log('numArrayCopy[jValue.index1]: ', numArrayCopy[jValue.index1]);
    //             console.log('numArrayCopy[jValue.index2]: ', numArrayCopy[jValue.index2]);
    //             finalResult++;
    //         }
    //     }
    //
    //
    //     // console.log('numArrayCopy: ', numArrayCopy);
    // }
    // for (const [key, value] of Object.entries(properVariations)) {
    //     const numArrayCopy = numArray.slice();
    //     console.log(`${key}:`, value);
    //     delete numArrayCopy[value.index1];
    //     delete numArrayCopy[value.index2];
    //     // numArrayCopy.delete(value.index2);
    //     console.log('numArrayCopy: ', numArrayCopy);
    // }

    //
    // for (const property in properVariations) {
    //     console.log(property, properVariations[property]);
    // }

    // for (let i = 0; i < properVariations.length; i++) {
    //     const numArrayCopy = numArray.slice();
    //     const number = properVariations[i];
    //     if (number > 24) {
    //         console.log('number is ', number, ' continue....')
    //         continue;
    //     }
    //     const numberA = parseInt((number + '')[0]);
    //     const numberB = parseInt((number + '')[1]);
    //
    //     let index = numArrayCopy.indexOf(numberA);
    //     if (index > -1) {
    //         numArrayCopy.splice(index, 1);
    //     }
    //     index = numArrayCopy.indexOf(numberB);
    //     if (index > -1) {
    //         numArrayCopy.splice(index, 1);
    //     }
    //     console.log('-----------');
    //     console.log('number: => ', number)
    //     console.log('numArrayCopy: ', numArrayCopy);
    //     for (let j = i; j < properVariations.length; j++) {
    //         if (properVariations[j + 1]) {
    //             const number2 = properVariations[j + 1];
    //             console.log('number2: ', number2);
    //             console.log('numArrayCopy: ', numArrayCopy);
    //             const numberA2 = parseInt((number2 + '')[0]);
    //             const numberB2 = parseInt((number2 + '')[1]);
    //             const index1 = numArrayCopy.indexOf(numberA2);
    //             const index2 = numArrayCopy.indexOf(numberB2);
    //
    //             if (index1 > -1 && index2 > -1) {
    //                 console.log('bingo!');
    //                 numArrayCopy.splice(index1, 2);
    //                 finalResult++;
    //             }
    //         }
    //     }
    //
    //
    //     // console.log('numArrayCopy: ', numArrayCopy);
    // }
    console.log(testArr);
    const setVal = new Set();
    for (let i = 0; i < testArr.length; i++) {
        setVal.add(testArr[i].value);
    }
    // return finalResult;
    return setVal.size;
    /*
    [ 1, 2, 3, 8 ]
    1238 / 1238
    2138 / 2138
    2318 / ...
    1328 / 1328
    ... / 1823
    ... / 1832

     */
};


module.exports = {
    solution: solution,
};
