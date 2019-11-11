const {lengthOfLongestSubstring} = require('./longest-substring-without-repeating-characters');

describe('lengthOfLongestSubstring', () => {
    it('lengthOfLongestSubstring is a function', () => {
        expect(typeof lengthOfLongestSubstring).toEqual('function');
    });

    it('Should solution return 0', () => {
        const actual = lengthOfLongestSubstring('');
        const expected = 0;
        expect(actual).toEqual(expected);
    });

    it('Should bbbbb solution return 1', () => {
        const actual = lengthOfLongestSubstring('bbbbb');
        const expected = 1;
        expect(actual).toEqual(expected);
    });

    it('Should pwwkew solution return 3', () => {
        const actual = lengthOfLongestSubstring('pwwkew');
        const expected = 3;
        expect(actual).toEqual(expected);
    });

    it('Should abcabcbb solution return 3', () => {
        const actual = lengthOfLongestSubstring('abcabcbb');
        const expected = 3;
        expect(actual).toEqual(expected);
    });

    it('Should abcabd solution return 4', () => {
        const actual = lengthOfLongestSubstring('abcabd');
        const expected = 4;
        expect(actual).toEqual(expected);
    });

    it('Should abca solution return 3', () => {
        const actual = lengthOfLongestSubstring('abca');
        const expected = 3;
        expect(actual).toEqual(expected);
    });

    it('Should solution return 2', () => {
        const actual = lengthOfLongestSubstring('wooow');
        const expected = 2;
        expect(actual).toEqual(expected);
    });

    it('Should "aaaabbbbabcdaaabbbcc" solution return 4', () => {
        const actual = lengthOfLongestSubstring('aaaabbbbabcdaaabbbcc');
        const expected = 4;
        expect(actual).toEqual(expected);
    });

    it('Should "au" solution return 2', () => {
        const actual = lengthOfLongestSubstring('au');
        const expected = 2;
        expect(actual).toEqual(expected);
    });

    it('Should "dvdf" solution return 3', () => {
        const actual = lengthOfLongestSubstring('dvdf');
        const expected = 3;
        expect(actual).toEqual(expected);
    });

    it('Should "bpfbhmipx" solution return 7', () => {
        const actual = lengthOfLongestSubstring('bpfbhmipx');
        const expected = 7;
        expect(actual).toEqual(expected);
    });
});

