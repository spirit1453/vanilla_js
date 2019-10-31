/* eslint-disable global-require */
const result = {
  CliUtil: require('./util/CliUtil'),
  CryptoUtil: require('./util/CryptoUtil'),
  DateUtil: require('./util/DateUtil'),
  FileUtil: require('./util/FileUtil'),
  FuncUtil: require('./util/FuncUtil'),
  GitUtil: require('./util/GitUtil'),
  StringUtil: require('./util/StringUtil'),
  TimeUtil: require('./util/TimeUtil')
}

Object.freeze(result)
module.exports = result
