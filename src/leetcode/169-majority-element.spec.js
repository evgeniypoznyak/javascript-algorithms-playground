const {solution} = require('./169-majority-element');

describe('169. Majority Element', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });
    it('Should return 3', () => {
        expect(solution([3, 2, 3])).toBe(3);
    });
    it('Should return 2', () => {
        expect(solution([2, 2, 1, 1, 1, 2, 2])).toBe(2);
    });
    it('Should return 3 if [3,3,4] passed', () => {
        expect(solution([3, 3, 4])).toBe(3);
    });
});
