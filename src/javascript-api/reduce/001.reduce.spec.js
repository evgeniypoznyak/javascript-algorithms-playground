const { solution } = require('./001.reduce')

describe('Search Insert Position', () => {
  const expected = {
    'mark johansson': [
      {
        name: 'waffle iron',
        price: '80',
        quantity: '2',
      },
      {
        name: 'blender',
        price: '200',
        quantity: '1',
      },
      {
        name: 'knife',
        price: '10',
        quantity: '4',
      },
    ],
    'Nikita Smith': [
      {
        name: 'waffle iron',
        price: '80',
        quantity: '1',
      },
      {
        name: 'knife',
        price: '10',
        quantity: '2',
      },
      {
        name: 'pot',
        price: '20',
        quantity: '3',
      },
    ],
  }
  let actual = ''
  beforeAll(() => {
    actual = solution()
  })

  it('solution is a function', () => {
    expect(typeof solution).toEqual('function')
  })

  it('Should be typeof actual to be equal type of object ', () => {
    expect(typeof actual).toEqual('object')
  })

  it("Should have key to equal 'mark johansson'", () => {
    expect(actual).toHaveProperty('mark johansson')
  })

  it("Should object with key 'mark johansson' have array with length 3", () => {
    expect(actual['mark johansson'].length).toEqual(3)
  })

  it("Should object with key 'mark johansson' have last item with quantity = 4", () => {
    expect(actual['Nikita Smith'].length).toEqual(3)
  })

  it("Should object with key 'mark johansson' have last item with quantity = '4'", () => {
    const lastItem =
      actual['mark johansson'][actual['mark johansson'].length - 1]
    expect(lastItem.quantity).toEqual('4')
  })

  it("Should object with key 'Nikita Smith' have array with length '3'", () => {
    const lastItem = actual['Nikita Smith'][actual['Nikita Smith'].length - 1]
    expect(lastItem.quantity).toEqual('3')
  })

  it("Should object with key 'Nikita Smith' have array with length '3'", () => {
    expect(actual).toEqual(expected)
  })
})
