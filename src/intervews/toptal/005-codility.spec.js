const { solution } = require('./005-codility')

describe('Exercise 5', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return 0', () => {
    const actual = solution()
    const expected = 0
    expect(actual).toEqual(expected)
  })
})
