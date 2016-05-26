import memoize from '../src/memoize'

describe('test memoize', () => {
  const fib = (x) => {
    if (x < 2) {
      return 1
    } else {
      return fib(x - 1) + fib(x - 2)
    }
  }
  const fibMemoize = memoize(fib)

  it('fibMemoize should be function', () => {
    assert.equal('function', typeof fibMemoize)
  })

  const benchStart = Date.now()
  const result = fibMemoize(32)
  const benchEnd = Date.now()
  const memoizeResult = fibMemoize(32)
  const benchEndMemoize = Date.now()

  it('result must be 3524578', () => {
    assert.equal(3524578, result)
  })

  it('calulate memoizeResult must be quicker', () => {
    assert.isAbove(benchEnd - benchStart, benchEndMemoize - benchEnd)
  })
})
