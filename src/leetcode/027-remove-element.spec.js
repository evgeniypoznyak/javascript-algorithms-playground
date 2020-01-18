const {solution} = require('./027-remove-element');

describe('Remove Element', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should be 2 if [3,2,2,3], 3 passed in', () => {
        expect(solution([3, 2, 2, 3], 3)).toBe(2);
    });

    it('Should be 5 if [0,1,2,2,3,0,4,2], 2, passed in', () => {
        expect(solution([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
    });
});
