const _ = require('lodash')

class FuncUtil {
  static debounceFunc (func, interval = 1000 * 2) {
    return _.throttle(func, interval, {
      leading: true,
      trailing: false
    })
  }
}

Object.freeze(FuncUtil)
module.exports = FuncUtil
