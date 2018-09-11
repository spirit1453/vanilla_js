const printMessage = require('print-message')

class Cls {
  static info (ary) {
    printMessage(ary, {color: 'blue', borderColor: 'green'})
  }
  static error (ary) {
    printMessage(ary, {color: 'red', borderColor: 'green'})
  }
  static warn (ary) {
    printMessage(ary, {color: 'yellow', borderColor: 'green'})
  }
  static isAllNull (...ary) {
    for (let ele of ary) {
      if (ele) {
        return false
      }
    }
    return true
  }
}

Object.freeze(Cls)
module.exports = Cls
