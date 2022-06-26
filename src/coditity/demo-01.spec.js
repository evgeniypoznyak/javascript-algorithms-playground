// [1, 3, 6, 4, 1, 2] -> 5
// [1, 2, 3] -> 4
// [-1, -3] ->1
//

const { solution } = require('./demo-01')

describe('coditity demo-01', () => {
  it('lengthOfLongestSubstring is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should empty solution return 1', () => {
    const actual = solution([])
    const expected = 1
    expect(actual).toEqual(expected)
  })

  it('Should [1, 3, 6, 4, 1, 2] solution return 5', () => {
    const actual = solution([1, 3, 6, 4, 1, 2])
    const expected = 5
    expect(actual).toEqual(expected)
  })

  it('Should [1, 2, 3] solution return 4', () => {
    const actual = solution([1, 2, 3])
    const expected = 4
    expect(actual).toEqual(expected)
  })

  it('Should [1, 2, 3, -1, -2, -5, 10] solution return 4', () => {
    const actual = solution([1, 2, 3, -1, -2, -5, 10])
    const expected = 4
    expect(actual).toEqual(expected)
  })

  it('Should [-1, -3] solution return 1', () => {
    const actual = solution([-1, -3])
    const expected = 1
    expect(actual).toEqual(expected)
  })
})
