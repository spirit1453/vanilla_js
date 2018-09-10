/* eslint-disable global-require */
const result = {
  DateUtil: require('./util/DateUtil'),
  StringUtil: require('./util/StringUtil'),
  CliUtil: require('./util/CliUtil')
}

Object.freeze(result)
module.exports = result
