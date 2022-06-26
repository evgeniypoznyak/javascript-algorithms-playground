const { solution } = require('./002-hackerrank')

describe('hackerrank Exercise 2', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return array', () => {
    const testData = ['abc', '123', 'def', 'qwerty', 'boom!']
    const actual = solution(testData, 9)
    const expected = [['abc', '123', 'def'], ['qwerty'], ['boom!']]
    expect(actual).toStrictEqual(expected)
  })
  it('Should solution return chunked array', () => {
    const testData = ['abc', '123', 'def', 'qwerty', 'boom!']
    const actual = solution(testData, 6)
    const expected = [['abc', '123'], ['def'], ['qwerty'], ['boom!']]
    expect(actual).toStrictEqual(expected)
  })
})
