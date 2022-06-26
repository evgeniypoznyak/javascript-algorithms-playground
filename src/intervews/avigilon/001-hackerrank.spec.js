const { solution } = require('./001-hackerrank')

describe('hackerrank Exercise 1', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return array', () => {
    const actual = solution(['abc', '123'], 2)
    const expected = ['abc', '123']
    expect(actual).toStrictEqual(expected)
  })
  it('Should solution return chunked array', () => {
    const actual = solution(['abc', '123', 'def', 'qwerty', 'boom!'], 2)
    const expected = [['abc', '123'], ['def', 'qwerty'], ['boom!']]
    expect(actual).toStrictEqual(expected)
  })

  // it('Should solution return 2 if empty passed', () => {
  //     const actual = solution();
  //     const expected = 2;
  //     expect(actual).toStrictEqual(expected);
  // });
})
