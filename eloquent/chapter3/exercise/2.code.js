/**
 * 递归
 * 判断一个正整数是奇数还是偶数
 * 0是偶数
 * 1是奇数
 * 对于任何其他数字N，其奇偶性与N-2相同
 * 定义递归函数isEven，接收单个参数（正整数），返回布尔值
 * test case: 50 75 -1
 */
function isEven(num) {
    if (num === 0) {
        return true
    } else if (num === 1) {
        return false
    } else {
        return isEven(num - 2)
    }
}

// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))

// true
// false
// RangeError: Maximum call stack size exceeded

/**
 * 因为没有对负数做限制，导致数越减越小，耗尽程序内存
 */
function isEven2(num) {
    if (num < 0) {
        return false
    } else if (num === 0) {
        return true
    } else if (num === 1) {
        return false
    } else {
        return isEven2(num - 2)
    }
}

// console.log(isEven2(50))
// console.log(isEven2(75))
// console.log(isEven2(-1))

// true
// false
// false

/**
 * 但这样逻辑是不对的，虽然题目中只对正整数判断奇偶性，
 * 但负数也存在奇偶性，而且负数的奇偶性和其绝对值的奇偶性相同
 */
function isEven3(n) {
    if (n === 0) return true
    else if (n === 1) return false
    else if (n < 0) return isEven3(-n)
    else return isEven3(n - 2)
}

console.log(isEven3(50))
console.log(isEven3(75))
console.log(isEven3(-1))

// true
// false
// false