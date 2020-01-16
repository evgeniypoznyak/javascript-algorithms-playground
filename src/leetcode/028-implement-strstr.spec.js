const {solution} = require('./028-implement-strstr');

describe('Implement strStr', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should be 2 if "hello", "ll" passed in', () => {
        expect(solution('hello', 'll')).toBe(2);
    });

    it('Should be 2 if "aaaaa", "bba" passed in', () => {
        expect(solution('aaaaa', 'bba')).toBe(-1);
    });

});
