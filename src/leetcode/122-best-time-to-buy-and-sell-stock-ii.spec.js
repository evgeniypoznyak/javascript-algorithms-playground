const { solution } = require('./122-best-time-to-buy-and-sell-stock-ii')

describe('Best Time to Buy and Sell Stock II', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should be 7 if [7, 1, 5, 3, 6, 4] passed', () => {
    expect(solution([7, 1, 5, 3, 6, 4])).toStrictEqual(7)
  })

  it('Should be 4 if [1,2,3,4,5] passed', () => {
    expect(solution([1, 2, 3, 4, 5])).toStrictEqual(4)
  })

  it('Should be 0 if [7,6,4,3,1] passed', () => {
    expect(solution([7, 6, 4, 3, 1])).toStrictEqual(0)
  })
})
