const {solution} = require('./014-longest-common-prefix');

describe('Longest Common Prefix', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should solution return "fl" if ["flower","flow","flight"] passed into', () => {
        expect(solution(['flower', 'flow', 'flight'])).toBe('fl');
    });

    it('Should solution return "" if ["dog","racecar","car"] passed into', () => {
        expect(solution(['dog', 'racecar', 'car'])).toBe('');
    });
});
