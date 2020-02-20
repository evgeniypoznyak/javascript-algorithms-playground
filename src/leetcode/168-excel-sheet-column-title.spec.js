const {solution} = require('./168-excel-sheet-column-title');

describe('168. Excel Sheet Column Title', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });
    it('Should be "A" if 1 passed', () => {
        expect(solution(1)).toEqual('A');
    });
    it('Should be "AB" if 28 passed', () => {
        expect(solution(28)).toEqual('AB');
    });
    it('Should be "ZY" if 701 passed', () => {
        expect(solution(701)).toEqual('ZY');
    });
});
