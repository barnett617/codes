/**
 * 最小值
 * Math.min
 */
function min(num1, num2) {
    try {
        let num1Num = Number(num1)
        let num2Num = Number(num2)
        return num1Num < num2Num ? num1 : num2
    } catch (e) {
        throw e
    }
}

console.log(min(0, 10))
console.log(min(0, -10))

/**
 * 这次的答案并没有惊艳
 */
function min2(a, b) {
    return a < b ? a : b
}