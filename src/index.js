/* eslint-disable global-require */
const result = {
  ArrayUtil: require('./util/ArrayUtil'),
  AssertUtil: require('./util/AssertUtil'),
  CliUtil: require('./util/CliUtil'),
  CryptoUtil: require('./util/CryptoUtil'),
  DateUtil: require('./util/DateUtil'),
  FileUtil: require('./util/FileUtil'),
  FuncUtil: require('./util/FuncUtil'),
  GitUtil: require('./util/GitUtil'),
  ObjectUtil: require('./util/ObjectUtil'),
  StringUtil: require('./util/StringUtil'),
  TimeUtil: require('./util/TimeUtil'),
  UrlUtil: require('./util/UrlUtil')
}

Object.freeze(result)
module.exports = result
