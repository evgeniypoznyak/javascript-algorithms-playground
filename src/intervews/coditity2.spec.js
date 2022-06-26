const expect = require('chai').expect
const { solution } = require('./codility2')

describe('codility2', () => {
  it('Should solution return 6', () => {
    const actual = solution(1, 8, 3, 2)
    const expected = 6
    expect(actual).to.equal(expected)
  })

  it('Should solution return 3', () => {
    const expected = 3
    const actual = solution(2, 3, 3, 2)
    expect(actual).to.equal(expected)
  })

  it('Should solution return 0', () => {
    const expected = 0
    const actual = solution(6, 2, 4, 7)
    expect(actual).to.equal(expected)
  })
})
