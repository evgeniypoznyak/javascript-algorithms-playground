const { solution } = require('./009-palindrome-number')

describe('Palindrome Number', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should 0 solution return true', () => {
    expect(solution(0)).toBeTruthy()
  })

  it('Should 121 solution return true', () => {
    expect(solution(121)).toBeTruthy()
  })

  it('Should -121 solution return false', () => {
    expect(solution(-121)).toBeFalsy()
  })

  it('Should 10 solution return false', () => {
    expect(solution(10)).toBeFalsy()
  })

  it('Should 12345 solution return false', () => {
    expect(solution(12345)).toBeFalsy()
  })

  it('Should 12321 solution return true', () => {
    expect(solution(12345)).toBeTruthy()
  })
})
