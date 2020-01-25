// Exercise 1
// Find available seats in the plane for family with 4 people
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
    if (S.length === 0) {
        return N * 2;
    }
    let totalAvailableFamilies = 0;
    const group1 = ['B', 'C', 'D', 'E'];
    const group2 = ['D', 'E', 'F', 'G'];
    const group3 = ['F', 'G', 'H', 'J'];
    const reservedSeats = S.split(' ');
    let maxRows = 0;

    reservedSeats.forEach(el => {
        maxRows = Math.max(maxRows, el.match(/\d+/g).pop());
    });

    const searchByArrayInArrayWithIndex = (arr1, arr2, index) => {
        arr1.forEach(element => {
            if (arr2.find(el => el === index + element) !== undefined) {
                return true;
            }
        });
        return false;
    };

    for (let i = 1; i < maxRows; i++) {
        let families = 2;
        const group1Result = searchByArrayInArrayWithIndex(group1, reservedSeats, i);
        const group2Result = searchByArrayInArrayWithIndex(group2, reservedSeats, i);
        const group3Result = searchByArrayInArrayWithIndex(group3, reservedSeats, i);

        if (group1Result && group2Result) {
            families = 1;
        }
        if (group2Result && group3Result) {
            families = 1;
        }
        if (group1Result && group2Result && group3Result) {
            families = 0;
        }
        totalAvailableFamilies = totalAvailableFamilies + families;
    }
    return totalAvailableFamilies;
}


module.exports = {
    solution: solution,
};
