const { solution } = require('./026-remove-duplicates-from-sorted-array')

describe('Remove Duplicates from Sorted Array', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should be no duplicates if [1,1,2] passed in', () => {
    expect(solution([1, 1, 2])).toBe(2)
  })

  it('Should be no duplicates if [0,0,1,1,1,2,2,3,3,4] passed in', () => {
    expect(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toBe(5)
  })
})
