const { solution } = require('./part1')

describe('Amazon Exercise 1', () => {
  it('should return 3 if [4, 2, 3, 4]', () => {
    const parcels = [4, 2, 3, 4]
    expect(solution(parcels)).toBe(3)
  })
  it('should return 1 if [3, 3, 3, 3, 3, 3]', () => {
    const parcels = [3, 3, 3, 3, 3, 3]
    expect(solution(parcels)).toBe(1)
  })
  it('should return 3 if [4, 4, 2, 3, 4]', () => {
    const parcels = [4, 4, 2, 3, 4]
    expect(solution(parcels)).toBe(3)
  })
  it('should return 1 if [6, 3, 3, 3, 3, 3, 3]', () => {
    const parcels = [6, 3, 3, 3, 3, 3, 3]
    expect(solution(parcels)).toBe(1)
  })
})
