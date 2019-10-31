
class TimeUtil {
  static toReadableTime(millisecondVal) {
    const inSecond = millisecondVal / 1000
    let secondTotal = Math.floor(inSecond) || 0
    let secondCount = secondTotal % 60
    let minCount
    let hourCount
    if (secondTotal) {
      const minTotal = Math.floor(secondTotal / 60)
      if (minTotal) {
        minCount = minTotal % 60
        hourCount =  Math.floor(minTotal / 60)
      }
    }


    const subSecondStr = (inSecond - secondTotal).toFixed(2)

    const result = `${hourCount? hourCount+'hour' :''}${minCount? minCount + 'min':''}${secondCount}${subSecondStr.substring(1)}s`
    return result
  }
}

Object.freeze(TimeUtil)
module.exports = TimeUtil
