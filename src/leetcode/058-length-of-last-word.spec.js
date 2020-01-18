const {solution} = require('./058-length-of-last-word');

describe('Length of Last Word', () => {
    it('solution is a function', () => {
        expect(typeof solution).toEqual('function');
    });

    it('Should be 5 if "Hello World" is passed in', () => {
        expect(solution('Hello World')).toBe(5);
    });

    it('Should be 1 if "a " is passed in', () => {
        expect(solution('a ')).toBe(1);
    });
});
