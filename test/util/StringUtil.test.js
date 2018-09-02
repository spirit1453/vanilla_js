const path = require('path')
const rootPath = path.resolve(__dirname, '../../')
const StrintUtil = require(path.resolve(rootPath, 'src/util/StringUtil'))
const {eqIgnoreCase} = StrintUtil

test('StrintUtil eqIgnoreCase', () => {
  expect(eqIgnoreCase('PEace', 'peaCE')).toBe(true)
})
