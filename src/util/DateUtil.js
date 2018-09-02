
class Cls {
  static paddingDate (date) {
    date = date.toString()
    return date.padStart(2, '0')
  }
}

Object.freeze(Cls)
module.exports = Cls
