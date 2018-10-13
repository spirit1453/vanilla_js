const _ = require('lodash')
const isPromise = require('is-promise')

class FuncUtil {
  static debounceFunc (func, interval = 1000 * 2) {
    return _.throttle(func, interval, {
      leading: true,
      trailing: false
    })
  }
  static async timeCount (func, option = {}) {
    const {shouldFormat = true} = option
    const start = Date.now()
    const returnValue = func()
    if (isPromise(returnValue)) {
      await returnValue
    }
    let result = Date.now() - start
    if (shouldFormat) {
      const ms = result % 1000
      const sCount = Math.floor(result / 1000)
      const s = sCount % 60
      const minCount = Math.floor(sCount / 60)
      let minStr = ''
      let sStr = ''
      if (minCount) {
        minStr = `${minCount}min-`
      }
      if (s) {
        sStr = `${s}s-`
      }
      result = `${minStr}${sStr}${ms}ms`
    }
    return result
  }
  static runFunc (func) {
    if (func) {
      func()
    }
  }
}

Object.freeze(FuncUtil)
module.exports = FuncUtil
