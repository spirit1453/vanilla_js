
class Cls {
  static eqIgnoreCase (str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase()
  }
}

Object.freeze(Cls)
module.exports = Cls
