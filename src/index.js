/* eslint-disable global-require */
const result = {
  DateUtil: require('./util/DateUtil'),
  StringUtil: require('./util/StringUtil')
}

Object.freeze(result)
module.exports = result
