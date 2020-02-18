
class UrlUtil {
  static isWebUrl(url) {
    return /^https?:\/\//.test(url)
  }
}

Object.freeze(UrlUtil)
module.exports = UrlUtil
