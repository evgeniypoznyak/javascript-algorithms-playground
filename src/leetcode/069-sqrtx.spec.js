const {solution} = require('./069-sqrtx');

describe('Sqrt(x)', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should be 2 if 4 passed', () => {
        expect(solution(4)).toStrictEqual(2);
    });
    it('Should be 2 if 4 passed', () => {
        expect(solution(8)).toStrictEqual(2);
    });
});
