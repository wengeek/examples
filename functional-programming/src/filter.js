function filter (obj, callback, context) {
  if (obj === undefined || obj === null) {
    throw new TypeError('obj cannot be undefined or null')
  }

  if (typeof callback !== 'function') {
    throw new TypeError('callback should be function')
  }

  const keys = Object.keys(obj)
  const length = (keys || obj).length
  const ret = []

  for (let i = 0; i < length; i++) {
    if (callback.call(context, obj[keys[i]], keys[i], obj)) {
      ret.push(obj[keys[i]])
    }
  }

  return ret
}

export default filter
