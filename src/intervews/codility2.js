
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

    const hoursGroup = [];

    for (let i = 0; i < numArray.length; i++) {
        for (let j = 1; j < numArray.length; j++) {
            const stringNumber = numArray[i] + '' + numArray[j];
            if (stringNumber < 23 && stringNumber > 0) {
                hoursGroup.push(stringNumber);
            }
        }
    }

    if (hoursGroup.length === 0) {
        return 0;
    }

    const properVariations = [];
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

    const resultArr = [];

    function isSecondIterationValueValid(numArrayCopy, j) {
        return numArrayCopy[properVariations[j].index1] !== undefined &&
            numArrayCopy[properVariations[j].index2] !== undefined;
    }

    function isHourIntValid(index) {
        return isHour(parseInt(properVariations[index].value));
    }

    for (let i = 0; i < properVariations.length; i++) {
        const numArrayCopy = numArray.slice();
        delete numArrayCopy[properVariations[i].index1];
        delete numArrayCopy[properVariations[i].index2];
        for (let j = i; j < properVariations.length; j++) {
            if (
                isHourIntValid(j) &&
                isSecondIterationValueValid(numArrayCopy, j)
            ) {
                resultArr.push({
                    value: properVariations[j].value + '' + properVariations[i].value,
                });
            }

            if (
                isHourIntValid(i) &&
                isSecondIterationValueValid(numArrayCopy, j)
            ) {
                resultArr.push({
                    value: properVariations[i].value + '' + properVariations[j].value,
                });
            }
        }
    }

    const setVal = new Set();
    for (let i = 0; i < resultArr.length; i++) {
        setVal.add(resultArr[i].value);
    }

    return setVal.size;
};


module.exports = {
    solution: solution,
};
