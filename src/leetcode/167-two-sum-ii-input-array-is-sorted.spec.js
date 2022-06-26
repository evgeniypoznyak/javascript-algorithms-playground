const { solution } = require('./167-two-sum-ii-input-array-is-sorted')

describe('167. Two Sum II - Input array is sorted', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })
  it('Should be [1, 2] if [2, 7, 11, 15] passed', () => {
    expect(solution([2, 7, 11, 15], 9)).toEqual([1, 2])
  })
})
