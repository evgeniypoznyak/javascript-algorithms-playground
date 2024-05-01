import {findTheDifference} from "./389-find-the-difference";

describe('findTheDifference', () => {
    it('returns the added letter when the original string is empty', () => {
        expect(findTheDifference("", "y")).toBe("y");
    });

    it('returns the added letter when the original string is not empty', () => {
        expect(findTheDifference("abcd", "abcde")).toBe("e");
    });

    it('returns the added letter when the added letter is not at the end', () => {
        expect(findTheDifference("abcd", "ebcda")).toBe("e");
    });

    it('returns the added letter when the added letter is at the beginning', () => {
        expect(findTheDifference("abcd", "aabcd")).toBe("a");
    });

    it('returns the added letter when the original string has duplicate letters', () => {
        expect(findTheDifference("aabcd", "aaabcd")).toBe("a");
    });
});
