const {solution} = require('./067-add-binary');

describe('Add Binary', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should be "100" if "11" and "1" is passed in', () => {
        expect(solution('11', '1')).toStrictEqual('100');
    });

    it('Should be "10101" if "1010" and "1011" is passed in', () => {
        expect(solution('1010', '1011')).toStrictEqual('10101');
    });
});
