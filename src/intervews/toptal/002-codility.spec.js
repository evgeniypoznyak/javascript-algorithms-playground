const { solution } = require('./002-codility')

describe('Exercise 2', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return 1', () => {
    const actual = solution([5, 4, 3, 2, 6])
    const expected = 1
    expect(actual).toEqual(expected)
  })

  it('Should solution return 0', () => {
    const actual = solution([3, 7, 4, 5])
    const expected = 0
    expect(actual).toEqual(expected)
  })
})
