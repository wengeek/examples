/**
 * map 操作
 *
 * @param {array|object} obj
 * @param {function} callback
 * @return {array}
 */
function map (obj, callback) {
  const results = []

  if (obj === undefined || obj === null) {
    return results
  }

  if (typeof obj.map === 'function') {
    return obj.map(callback)
  }

  const keys = Object.keys(obj)
  const length = (keys || obj).length

  for (let i = 0; i < length; i++) {
    results[i] = callback(obj[keys[i]], keys[i], obj)
  }

  return results
}

export default map
