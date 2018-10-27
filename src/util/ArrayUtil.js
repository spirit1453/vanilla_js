const _ = require('lodash')

class ArrayUtil {
  static shuffle (ary) {
    const result = _.cloneDeep(ary)
    const {length} = result
    for (let i = length; i > 1; i--) {
      const randomIndex = Math.floor(Math.random() * i)
      const randomValue = result[randomIndex]
      i--
      const outerValue = result[i]
      result[i] = randomValue
      result[randomIndex] = outerValue
    }

    return result
  }
}

Object.freeze(ArrayUtil)
module.exports = ArrayUtil
