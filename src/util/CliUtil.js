const printMessage = require('print-message')
const inquirer = require('inquirer')

class Cls {
  static info (ary) {
    printMessage(ary, {color: 'blue', borderColor: 'green'})
  }
  static error (ary) {
    printMessage(ary, {color: 'red', borderColor: 'green'})
  }
  static warn (ary) {
    printMessage(ary, {color: 'yellow', borderColor: 'green'})
  }
  static isAllNull (...ary) {
    for (let ele of ary) {
      if (ele) {
        return false
      }
    }
    return true
  }
  static checkOption (option) {
    // const questionAry = []
    // const param = {}
    //
    // for (let key in option) {
    //   const question = option[key]
    //   const inputValue = argv[key]
    //   if (!inputValue) {
    //     const {default: defaultValue} = question
    //     if (defaultValue) {
    //       param[key] = defaultValue
    //     } else {
    //       question.name = key
    //       questionAry.push(question)
    //     }
    //   } else {
    //     param[key] = inputValue
    //   }
    // }
    // const {length} = questionAry
    // if (length) {
    //   const answer = await inquirer.prompt(questionAry)
    //
    //   _.merge(param, answer)
    // }
  }
}

Object.freeze(Cls)
module.exports = Cls
