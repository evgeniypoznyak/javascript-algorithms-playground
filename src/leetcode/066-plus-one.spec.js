const {solution} = require('./066-plus-one');

describe('Plus One', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should be [1,2,4] if [1,2,3] is passed in', () => {
        expect(solution([1, 2, 3])).toStrictEqual([1, 2, 4]);
    });

    it('Should be [4, 3, 2, 2] if [4, 3, 2, 1] is passed in', () => {
        expect(solution([4, 3, 2, 1])).toStrictEqual([4, 3, 2, 2]);
    });

    it('Should be [1,0] if [9] is passed in', () => {
        expect(solution([9])).toStrictEqual([1, 0]);
    });

    it('Should be [2,0,5,9,0,0] if [2,0,5,8,9,9] is passed in', () => {
        expect(solution([2, 0, 5, 8, 9, 9])).toStrictEqual([2, 0, 5, 9, 0, 0]);
    });
});
