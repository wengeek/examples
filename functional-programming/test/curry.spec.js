import curry from '../src/curry'

describe('test curry', () => {
  const add = (a, b) => {
    return a + b
  }
  const add10 = curry(add, 10)

  it('add10 should be function', () => {
    assert.equal('function', typeof add10)
  })

  it('add10(5) must return 15', () => {
    assert.equal(15, add10(5))
  })
})
