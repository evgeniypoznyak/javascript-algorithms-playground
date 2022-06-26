const { solution } = require('./001.example')

describe('168. Excel Sheet Column Title', () => {
  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it(`Should work`, () => {
    solution()
  })
})
