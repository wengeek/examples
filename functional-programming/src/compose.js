/**
 * compose 组合
 *
 * @param ...args
 * @return {function}
 */
function compose (...args) {
  let start = args.length - 1
  return (...applyArgs) => {
    let i = start
    let result = args[start].apply(this, applyArgs)

    while (i--) {
      result = args[i].call(this, result)
    }
    return result
  }
}

export default compose
