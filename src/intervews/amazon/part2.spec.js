const { solution } = require('./part2')

describe('Amazon Exercise 2', () => {
  it('should return 27 if [2, 1, 3,]', () => {
    const parcels = [2, 1, 3]
    expect(solution(parcels)).toBe(27)
  })
  it('should return 32 if [2, 4]', () => {
    const parcels = [2, 4]
    expect(solution(parcels)).toBe(32)
  })
  it('should return 69 if [2, 3, 2, 1]', () => {
    const parcels = [2, 3, 2, 1]
    expect(solution(parcels)).toBe(69)
  })
})
