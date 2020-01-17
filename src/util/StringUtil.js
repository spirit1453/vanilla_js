
class Cls {
  static eqIgnoreCase (str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase()
  }

  static stripNewline (str, option = {}) {
    const {shouldTrim = true, replaceStr = ' '} = option
    let result = str
    if (shouldTrim) {
      result = result.trim()
    }
    result = result.replace(/\n/g, replaceStr)
    return result
  }

  static capitalizeFirst(str) {
       return str[0].toUpperCase() + str.substring(1)
  }
}

Object.freeze(Cls)
module.exports = Cls
