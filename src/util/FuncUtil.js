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
    const {shouldFormat = true, shouldLog = true, callback} = option
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
    if (shouldLog) {
      console.log(`time elapsed: ${result}`)
    }
    FuncUtil.runFunc(callback)
    return result
  }
  static runFunc (func) {
    if (func) {
      func()
    }
  }
  static continue(func, option = {}) {
    let {conditionalFunc} = option
    const defaultConditionalFunc = () => {return true}
    conditionalFunc = conditionalFunc || defaultConditionalFunc
    try {
      func()
    } catch(error) {
      if (conditionalFunc) {
        func()
      }
    }
  }
}

Object.freeze(FuncUtil)
module.exports = FuncUtil
