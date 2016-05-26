import map from '../src/map'

describe('test map', () => {
  const arr = [1, 2, 3]
  const result = map(arr, (item, i) => item * 2)
  const obj = {a: 1, b: 2}
  const objResult = map(obj, (item, i) => item + 2)

  it('map should return array', () => {
    assert.equal(true, Array.isArray(result))
    assert.equal(true, Array.isArray(objResult))
  })

  it('arr should be [1, 2, 3]', () => {
    assert.deepEqual([1, 2, 3], arr)
  })

  it('result should be [2, 4, 6]', () => {
    assert.deepEqual([2, 4, 6], result)
  })

  it('obj should be {a: 1, b: 2}', () => {
    assert.deepEqual({a: 1, b: 2}, obj)
  })

  it('objResult should be [3, 4]', () => {
    assert.deepEqual([3, 4], objResult)
  })
})
