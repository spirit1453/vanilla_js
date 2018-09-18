const fse = require('fs-extra')
const path = require('path')
const rootPath = path.resolve(__dirname, '../')
const FileUtil = require(path.resolve(rootPath, 'src/util/FileUtil'))
const {removeExt} = FileUtil

const str1 = `/* eslint-disable global-require */
const result = {\n`
const str3 = `\n}

Object.freeze(result)
module.exports = result\n`
const srcDir = path.resolve(rootPath, 'src')
const utilDir = path.resolve(srcDir, 'util')
const indexFile = path.resolve(srcDir, 'index.js')
let str2 = '  '
const fileAry = fse.readdirSync(utilDir)
const {length} = fileAry
for (let i = 0; i < length; i++) {
  const file = fileAry[i]
  const pureName = removeExt(file)
  str2 += `${pureName}: require('./util/${pureName}')`
  if (i !== length - 1) {
    str2 += `,\n  `
  }
}

fse.writeFileSync(indexFile, str1 + str2 + str3)
