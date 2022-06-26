const { solution } = require('./136-single-number')

describe('136. Single Number', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })
  it('Should be 1 if [2,2,1] passed', () => {
    expect(solution([2, 2, 1])).toEqual(1)
  })
  it('Should be 4 if [4,1,2,1,2] passed', () => {
    expect(solution([4, 1, 2, 1, 2])).toEqual(4)
  })
})
