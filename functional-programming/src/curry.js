/**
 * curry
 *
 * @param {function} fn
 * @param ...args
 * @return {function}
 */
function curry (fn, ...args) {
  return (...newArgs) => {
    return fn.apply(null, args.concat(newArgs))
  }
}

export default curry
