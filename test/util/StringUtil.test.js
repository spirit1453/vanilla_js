const path = require('path')
const rootPath = path.resolve(__dirname, '../../')
const StrintUtil = require(path.resolve(rootPath, 'src/util/StringUtil'))
const {eqIgnoreCase, capitalizeFirst} = StrintUtil

test('StringUtil eqIgnoreCase', () => {
  expect(eqIgnoreCase('PEace', 'peaCE')).toBe(true)
})

test('StringUtil capitalizeFirst', () => {
      expect(capitalizeFirst('testTest')).toBe('TestTest')
})