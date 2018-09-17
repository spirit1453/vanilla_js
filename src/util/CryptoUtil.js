/* eslint-disable new-cap */

const aesjs = require('aes-js')
const config = require('../../config')

const {encrypt} = config
const {aesKey, counter} = encrypt

class Cls {
  static encryptAES (str) {
    const textBytes = aesjs.utils.utf8.toBytes(str)
    const aesCtr = new aesjs.ModeOfOperation.ctr(aesKey, new aesjs.Counter(counter))
    const encryptedBytes = aesCtr.encrypt(textBytes)
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes)
    return encryptedHex
  }
  static decryptAES (encryptData) {
    const encryptedBytes = aesjs.utils.hex.toBytes(encryptData)
    const aesCtr = new aesjs.ModeOfOperation.ctr(aesKey, new aesjs.Counter(counter))
    const decryptedBytes = aesCtr.decrypt(encryptedBytes)
    const decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes)
    return decryptedText
  }
}

Object.freeze(Cls)
module.exports = Cls
