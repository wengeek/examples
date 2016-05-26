import filter from '../src/filter'

describe('test filter', function () {
  const arr = [1, 2, 3, 4, 5, 6]
  const result = filter(arr, (item) => {
    return item > 3})

  it('result should be array', () => {
    assert.equal(true, Array.isArray(result))
  })

  it('result should be [4, 5, 6]', () => {
    assert.deepEqual([4, 5, 6], result)
  })
})
