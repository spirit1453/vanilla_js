
class Cls {
  static paddingDate (date) {
    date = date.toString()
    return date.padStart(2, '0')
  }
  static getTimeDisplay () {
    const date = new Date()
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
  }
}

Object.freeze(Cls)
module.exports = Cls
