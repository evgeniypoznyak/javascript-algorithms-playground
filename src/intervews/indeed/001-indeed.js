// Indeed 1

const wordIsGreaterThanSize = (curr, size) => curr.length > size;

const noMoreNextSteps = next => next === undefined;

const vocabularyHaveValues = (result, counter) => result[counter] && result[counter].length > 0;

const safeAddMoreToVocabulary = (vocabulary, counter, curr, size) => vocabulary[counter].length + 1 + curr.length <= size;

const wordsLessOrEqual = (curr, next, size) => (curr.length + 1) + next.length <= size;

const wordsGreater = (curr, next, size) => curr.length + 1 + next.length > size;

const solution = (arr, size) => {
    const vocabulary = [];
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        const curr = arr[i];
        const next = arr[i + 1];
        if (wordIsGreaterThanSize(curr, size)) {
            continue;
        }
        if (noMoreNextSteps(next)) {
            vocabulary[counter] = curr;
            return vocabulary;
        }
        if (
            vocabularyHaveValues(vocabulary, counter) &&
            safeAddMoreToVocabulary(vocabulary, counter, curr, size)
        ) {
            vocabulary[counter] = vocabulary[counter] + '-' + curr;
            counter++;
            continue;
        }
        if (wordsLessOrEqual(curr, next, size)) {
            vocabulary[counter] = curr;
        }
        if (wordsGreater(curr, next, size)) {
            vocabulary[counter] = curr;
            counter++;
        }
    }
};


module.exports = {
    solution: solution,
};
