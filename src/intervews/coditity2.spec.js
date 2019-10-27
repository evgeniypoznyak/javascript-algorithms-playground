const expect = require('chai').expect;
const {solution} = require('./codility2');

describe('codility2', () => {
    it('Should solution return 6', () => {
        const actual = solution(1, 8, 3, 2);
        const expected = 6;
        expect(actual).to.equal(expected);
    });

    it('Should solution return 3', () => {
        const expected = 3;
        // 2 , 2 , 3 , 3
        /*
        2233  // a , b , c , d
        2233 // b , a , c , d
        2323 // a , c , b , d
        2323 // a , d , b , c
        2323 // b , d , a , c
         */
        const actual = solution(2, 3, 3, 2);
        expect(actual).to.equal(expected);
    });

    it('Should solution return 0', () => {
        const expected = 0;
        const actual = solution(6, 2, 4, 7);
        expect(actual).to.equal(expected);
    });
});
