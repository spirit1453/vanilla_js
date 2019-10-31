const moment = require('moment')

class Cls {
  static paddingDate (date) {
    date = date.toString()
    return date.padStart(2, '0')
  }
  static getTimeDisplay (date) {
    date = date || new Date()

    const result = moment(date).format('YYYY-MM-DD_HH:mm')
    return result
  }
}

Object.freeze(Cls)
module.exports = Cls
