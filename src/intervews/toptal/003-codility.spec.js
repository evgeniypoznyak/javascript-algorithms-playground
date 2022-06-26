const { solution } = require('./003-codility')

describe('Exercise 3', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return 0', () => {
    const actual = solution()
    const expected = 0
    expect(actual).toEqual(expected)
  })
})
