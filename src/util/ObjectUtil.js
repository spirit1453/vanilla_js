
class ObjectUtil {
  // show key and value of an object
  static showKeyValue(obj) {
    for (let key in obj) {
      const value = obj[key]
      console.log(key, value)
    }
  }
}

Object.freeze(ObjectUtil)
module.exports = ObjectUtil
