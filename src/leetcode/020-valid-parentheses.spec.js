const { solution } = require('./020-valid-parentheses')

describe('Valid Parentheses', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should be true if "()" passed in', () => {
    expect(solution('()')).toBeTruthy()
  })

  it('Should be true if "()[]{}" passed in', () => {
    expect(solution('()[]{}')).toBeTruthy()
  })

  it('Should be true if "{[]}" passed in', () => {
    expect(solution('{[]}')).toBeTruthy()
  })

  it('Should be false if "(]" passed in', () => {
    expect(solution('(]')).toBeFalsy()
  })

  it('Should be false if "([)]" passed in', () => {
    expect(solution('([)]')).toBeFalsy()
  })

  it('Should be true if "([{}])" passed in', () => {
    expect(solution('([{}])')).toBeTruthy()
  })

  it('Should be true if "[{(()[]{()}[[()]]{{()}})}]" passed in', () => {
    expect(solution('[{(()[]{()}[[()]]{{()}})}]')).toBeTruthy()
  })
})
