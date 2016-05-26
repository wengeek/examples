/**
 * memoize
 *
 * @param {function} fn
 * @return {function}
 */
function memoize (fn) {
  const memoizeFn = (...args) => {
    const cache = memoizeFn.cache
    const key = JSON.stringify(args)

    if (!cache[key]) {
      cache[key] = fn.apply(this, args)
    }

    return cache[key]
  }

  memoizeFn.cache = {}
  return memoizeFn
}

export default memoize
