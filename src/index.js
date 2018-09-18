/* eslint-disable global-require */
const result = {
  CliUtil: require('./util/CliUtil'),
  CryptoUtil: require('./util/CryptoUtil'),
  DateUtil: require('./util/DateUtil'),
  FileUtil: require('./util/FileUtil'),
  FuncUtil: require('./util/FuncUtil'),
  StringUtil: require('./util/StringUtil')
}

Object.freeze(result)
module.exports = result
