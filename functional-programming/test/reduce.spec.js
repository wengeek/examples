import reduce from '../src/reduce'

describe('test reduce', () => {
  it('result should be 6', () => {
    const arr = [1, 2, 3]
    const result = reduce(arr, (a, b) => {
      return a + b
    })

    assert.equal(6, result)
  })

  const emptyArr = []
  it('emptyResult throw TypeError', () => {
    assert.throws(reduce.bind(null, emptyArr, (a, b) => {
      return a + b
    }), TypeError, 'Reduce of empty array with no initial value')
  })

  it('emptyResult return the initial value 1', () => {
    const emptyResult = reduce(emptyArr, () => {
    }, 1)

    assert.equal(1, emptyResult)
  })

  it('objResult should be 2', () => {
    const obj = {a: 1, b: 2}
    const objResult = reduce(obj, (a, b) => {
      return a * b
    })

    assert.equal(2, objResult)
  })
})
