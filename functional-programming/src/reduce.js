/**
 * reduce 操作
 *
 * @param {array|object} obj
 * @param {function} callback
 * @param {mix} initial
 * @return {mix}
 */
function reduce (obj, callback, initial) {
  if (obj === undefined || obj === null) {
    throw new TypeError('reduce called on null or undefined')
  }

  if (typeof callback !== 'function') {
    throw new TypeError('callback not a function')
  }

  const keys = Object.keys(obj)
  const length = (keys || obj).length
  let value = initial
  let i = 0

  if (!initial) {
    value = obj[keys[0]]
    i = 1
  }

  if (!initial && length === 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  for (; i < length; i++) {
    value = callback(value, obj[keys[i]], keys[i], obj)
  }

  return value
}

export default reduce
