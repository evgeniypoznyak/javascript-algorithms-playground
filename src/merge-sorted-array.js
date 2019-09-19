const isAllArraysValid = (arr1, arr2) =>
    Array.isArray(arr1) && Array.isArray(arr2) && arr1.length > 0 && arr2.length > 0;

const mergeSortedArrays = (arr1, arr2) => {
    if (isAllArraysValid(arr1, arr2)) {

        // todo

    }
};

const arr1 = [1, 2, 3, 43];
const arr2 = [3, 6, 32, 40];

console.log(mergeSortedArrays(arr1, arr2));
