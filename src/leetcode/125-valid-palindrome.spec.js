const {solution} = require('./125-valid-palindrome');

describe('125. Valid Palindrome', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });
    it('Should be true if empty string is passed', () => {
        expect(solution('')).toBeTruthy();
    });
    it('Should be true if palindrome string passed with symbols', () => {
        expect(solution('A man, a plan, a canal: Panama')).toBeTruthy();
    });
    it('Should be false if not a palindrome string is passed', () => {
        expect(solution('race a car')).toBeFalsy();
    });
    it('Should be true if string with spaces passed', () => {
        expect(solution(' ')).toBeTruthy();
    });
    it('Should be true if "0P" passed', () => {
        expect(solution('0P')).toBeFalsy();
    });
});
