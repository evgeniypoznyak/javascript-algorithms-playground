const {solution} = require('./007-reverse-integer');

describe('Reverse Integer', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should solution return 0', () => {
        const actual = solution(0);
        const expected = 0;
        expect(actual).toEqual(expected);
    });

    it('Should solution return 321', () => {
        const actual = solution(123);
        const expected = 321;
        expect(actual).toEqual(expected);
    });

    it('Should solution return -321', () => {
        const actual = solution(-123);
        const expected = -321;
        expect(actual).toEqual(expected);
    });

    it('Should solution return 21', () => {
        const actual = solution(120);
        const expected = 21;
        expect(actual).toEqual(expected);
    });

    it('Should solution return 4232189', () => {
        const actual = solution(9812324);
        const expected = 4232189;
        expect(actual).toEqual(expected);
    });

    it('Should 1534236469 solution return 0', () => {
        const actual = solution(1534236469);
        const expected = 0;
        expect(actual).toEqual(expected);
    });

});
