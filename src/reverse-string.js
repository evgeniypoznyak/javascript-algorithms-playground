// Lecture 66
const reverseString1 = (str) => str.split('').reverse().join('')
const reverseString2 = (str) => [...str].reverse().join('')

console.log(reverseString1('Hello my name is Evgeniy'))
console.log(reverseString2('Hello my name is Evgeniy'))

// 344. Reverse String
const input = ['h', 'e', 'l', 'l', 'o']
const reverseString = (s) => s.reverse()
console.log(reverseString(input))
