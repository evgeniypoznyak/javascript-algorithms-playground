const {solution} = require('./013-roman-integer');

describe('Roman to Integer', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should "III" solution return 3', () => {
        expect(solution('III')).toBe(3);
    });

    it('Should "IV" solution return 4', () => {
        expect(solution('IV')).toBe(4);
    });

    it('Should "IX" solution return 9', () => {
        expect(solution('IX')).toBe(9);
    });

    it('Should "LVIII" solution return 9', () => {
        expect(solution('LVIII')).toBe(58);
    });

    it('Should "MCMXCIV" solution return 1994', () => {
        expect(solution('MCMXCIV')).toBe(1994);
    });

    it('Should "MMXX" solution return 2020', () => {
        expect(solution('MMXX')).toBe(2020);
    });

    it('Should "MCMLXXXIII" solution return 1983', () => {
        expect(solution('MCMLXXXIII')).toBe(1983);
    });
});
