const { solution } = require('./035-search-insert-position')

describe('Search Insert Position', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should be 2 if [1,3,5,6], 5 passed in', () => {
    expect(solution([1, 3, 5, 6], 5)).toBe(2)
  })

  it('Should be 1 if [1,3,5,6], 2 passed in', () => {
    expect(solution([1, 3, 5, 6], 2)).toBe(1)
  })

  it('Should be 4 if [1,3,5,6], 7 passed in', () => {
    expect(solution([1, 3, 5, 6], 7)).toBe(4)
  })

  it('Should be 0 if [1,3,5,6], 0 passed in', () => {
    expect(solution([1, 3, 5, 6], 0)).toBe(0)
  })

  it('Should be 0 if [1], 0 passed in', () => {
    expect(solution([1], 0)).toBe(0)
  })

  it('Should be 2 if [1, 3], 4 passed in', () => {
    expect(solution([1, 3], 4)).toBe(2)
  })

  it('Should be 0 if [1, 3, 5], 0 passed in', () => {
    expect(solution([1, 3, 5], 0)).toBe(0)
  })

  it('Should be 6 if [1, 3, 4, 6, 7, 10], 11 passed in', () => {
    expect(solution([1, 3, 4, 6, 7, 10], 11)).toBe(6)
  })
})
