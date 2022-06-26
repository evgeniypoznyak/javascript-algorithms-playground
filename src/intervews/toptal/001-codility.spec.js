const { solution } = require('./001-codility')

describe('Exercise 1', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return 2', () => {
    const actual = solution(2, '1A 2F 1C')
    const expected = 2
    expect(actual).toEqual(expected)
  })

  it('Should solution return 2 if empty passed', () => {
    const actual = solution(1, '')
    const expected = 2
    expect(actual).toEqual(expected)
  })
})
