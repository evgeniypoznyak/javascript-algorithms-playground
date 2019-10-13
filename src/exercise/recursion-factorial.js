// Write two functions that finds the factorial of any number.
// One should use recursive, the other should just use a for loop
let answer = 1;

function findFactorialRecursive(number) {
    if (number === 1) {
        return answer;
    }
    answer = answer * number;
    number--;
    findFactorialRecursive(number);
}

findFactorialRecursive(5);
console.log(answer);


function findFactorialIterative(number) {
    let answer = 1;
    if (number === 2) {
        answer = 2;
    }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }

    return answer;
}

console.log(findFactorialIterative(5));
