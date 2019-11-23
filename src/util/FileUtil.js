
class Cls {
  static removeExt (fileName) {
    return fileName.split('.')[0]
  }
  static parseFileName(fileName) {
    const ary = fileName.split('.')
    const extension = ary[1]
    const pureName = ary[0]

    const result = {
      extension,
      pureName
    }

    return result
  }
}

Object.freeze(Cls)
module.exports = Cls
