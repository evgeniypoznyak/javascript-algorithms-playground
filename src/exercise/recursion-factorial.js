// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop
let answer = 0;

function findFactorialRecursive(number) {
    if (number === 1) {
        answer = answer + number * number;
        return answer;
    }
    answer = answer + (number * (number - 1));
    number--;
    findFactorialRecursive(number);
}

findFactorialRecursive(10);
console.log(answer);


function findFactorialIterative(number) {
    let answer = 1;
    const length = number;
    for (let i = 0; i < length; i++) {
        answer = answer + (number * (number - 1));
        number--;
    }

    return answer;
}

console.log(findFactorialIterative(10));
