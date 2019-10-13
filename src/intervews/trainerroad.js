// const t = [4, 3, [1, 2, 3], [4, 5, 6], [7, 8], [9, 10]];
//
//
// function getSum(arrs) {
//     const result = [];
//     for (let i = 2; i < arrs.length; i++) {
//         if (arrs[i].length > 1 && arrs[i].length % 2 === 0) {
//             result.push(arrs[i].reduce((a, b) => a + b, 0));
//         }
//     }
//     return result;
// }
//
//
// getSum(t);
//
//


// const a = [5, 7, 9, 1, 3, 2, 6, 8, 11];
//
// function smallestMissing(nums) {
//     const missingNumbers = [];
//     nums.sort((a, b) => a - b);
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(i) === -1) {
//             if (i !== 0) {
//                 missingNumbers.push(i);
//             }
//         }
//     }
//     if (missingNumbers.length > 0) {
//         return Math.min(...missingNumbers);
//     } else {
//         return nums[0];
//     }
//
// }
//
// console.log(smallestMissing(a));

// const array1 = [1, 2, 3];
// const array2 = [2, 30, 1];
//
// function mergeArrays(array1, array2) {
//     const allTogether = [];
//     if (array1.length > 0) {
//         array1.filter(filterArray);
//         allTogether.push(...array1);
//     }
//     if (array2.length > 0) {
//         array2.filter(filterArray);
//         allTogether.push(...array2);
//     }
//
//     return Array.from(new Set(allTogether));
// }
//
// function filterArray(value) {
//     return !isNaN(parseFloat(value)) && isFinite(value);
// }
//
// console.log(mergeArrays(array1, array2))


const input = ["Hello-2", "World-3", "this-2", "is-1", "my-0", "sentence-1"];


function convertToSentence(words) {
    const result = [];
    for (let i = 0; i < words.length; i++) {
        let arr = words[i].split('-');
        console.log(arr);
        const str = arr[0].slice();
        const char = str.charAt(str.length-1);
        const num = arr[1].slice();
        if (num !== 0) {
            let c = '';
            for (let i = 0; i < num; i ++){
                c = c + char.toLocaleUpperCase();
            }
            result.push(str + c);
        } else {
            result.push(str);
        }

    }
    return result;
}

convertToSentence(input);