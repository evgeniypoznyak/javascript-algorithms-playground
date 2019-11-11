const {solution} = require('./004-median-of-two-sorted-arrays');

describe('Median of Two Sorted Arrays', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should solution return 0', () => {
        const actual = solution([], []);
        const expected = 0;
        expect(actual).toEqual(expected);
    });
});
