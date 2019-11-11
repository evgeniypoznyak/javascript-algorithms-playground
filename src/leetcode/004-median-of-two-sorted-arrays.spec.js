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

    it('Should [] [3, 4] solution return 3.50000', () => {
        const actual = solution([], [3, 4]);
        const expected = 3.50000;
        expect(actual).toEqual(expected);
    });

    it('Should [3, 4, 5, 6] solution return 4.50000', () => {
        const actual = solution([], [3, 4, 5, 6]);
        const expected = 4.50000;
        expect(actual).toEqual(expected);
    });

    it('Should [] [3, 4, 5] solution return 4.00000', () => {
        const actual = solution([], [3, 4, 5]);
        const expected = 4.00000;
        expect(actual).toEqual(expected);
    });

    it('Should [3, 4, 5] []  solution return 4.00000', () => {
        const actual = solution([3, 4, 5], []);
        const expected = 4.00000;
        expect(actual).toEqual(expected);
    });

    it('Should [3, 4] [] solution return 3.50000', () => {
        const actual = solution([3, 4], []);
        const expected = 3.50000;
        expect(actual).toEqual(expected);
    });

    it('Should [] [3, 4, 5, 18, 22, 345] solution return 11.50000', () => {
        const actual = solution([], [3, 4, 5, 18, 22, 345]);
        const expected = 11.50000;
        expect(actual).toEqual(expected);
    });

    it('Should [3, 4, 5, 18, 22, 345] [] solution return 11.50000', () => {
        const actual = solution([3, 4, 5, 18, 22, 345], []);
        const expected = 11.50000;
        expect(actual).toEqual(expected);
    });

    it('Should [] [3, 4, 18, 22, 345] solution return 18.00000', () => {
        const actual = solution([], [3, 4, 18, 22, 345]);
        const expected = 18.00000;
        expect(actual).toEqual(expected);
    });

    it('Should [3, 4, 18, 22, 345] [] solution return 18.00000', () => {
        const actual = solution([3, 4, 18, 22, 345], []);
        const expected = 18.00000;
        expect(actual).toEqual(expected);
    });


    it('Should [1,3] [2] solution return 2.00000', () => {
        const actual = solution([1, 3], [2]);
        const expected = 2.00000;
        expect(actual).toEqual(expected);
    });

    it('Should [1,2] [3, 4] solution return 2.50000', () => {
        const actual = solution([1, 2], [3, 4]);
        const expected = 2.50000;
        expect(actual).toEqual(expected);
    });


    it('Should solution return 7.50000', () => {
        const actual = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], [1, 4, 8, 15, 18, 25]);
        const expected = 7.50000;
        expect(actual).toEqual(expected);
    });


});
