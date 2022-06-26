const { solution } = require('./001-indeed')

describe('Indeed Exercise 1', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should solution return modified values', () => {
    const data = [
      'I',
      'am',
      'know',
      'how',
      'to',
      'pass',
      'indeed',
      'test',
      'even',
      'if',
      'test',
      'unbelievable',
      'hard',
    ]
    const actual = solution(data, 8)
    const expected = [
      'I-am',
      'know-how',
      'to-pass',
      'indeed',
      'test',
      'even-if',
      'test',
      'hard',
    ]
    expect(actual).toStrictEqual(expected)
  })
})
