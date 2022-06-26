const { solution } = require('./004-codility')

describe('Exercise 4', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return 0', () => {
    const actual = solution([7, 3, 7, 3, 1, 3, 4, 1])
    const expected = 0
    expect(actual).toEqual(expected)
  })

  it('Should solution return 3', () => {
    const actual = solution([2, 1, 1, 3, 2, 1, 1, 3])
    const expected = 3
    expect(actual).toEqual(expected)
  })
})
