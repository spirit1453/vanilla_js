const path = require('path')
const rootPath = path.resolve(__dirname, '../../')
const DateUtil = require(path.resolve(rootPath, 'src/util/DateUtil'))
const {paddingDate} = DateUtil

test('DateUtil paddingDate', () => {
  expect(paddingDate(8)).toBe('08')
  expect(paddingDate(19)).toBe('19')
})
