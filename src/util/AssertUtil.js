
class AssertUtil {
/*    specAry:
    [{
        condition: bool,
        msg: string
    }]*/
  static passTest(specAry) {
    let result = true

    for(let ele of specAry){
        const {condition, msg} = ele
        if (!condition) {
            console.log(msg)
            result = false
            break
        }
    }
    return result
  }
}

Object.freeze(AssertUtil)
module.exports = AssertUtil
