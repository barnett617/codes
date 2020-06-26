/**
 * 字符计数
 * 编写 "string"[N] 从字符串中获取第 N 个字符或字母
 * 返回的值是仅包含一个字符的字符串
 */
function find(str, n) {
    return str.split('')[n]
}

// console.log(find('string', 2))

/**
 * 编写一个 countBs 将一个字符串作为唯一参数，返回一个数字，表示字符串中有多少个大写 B
 */
function countBs(str) {
    let ans = 0
    str.toString().split('').forEach(item => {
        if (item === 'B') ans++
    })
    return ans
}

// console.log(countBs('countBs'))

/**
 * 编写 countChar 需要第二个参数指示计数的字符（而不是仅计算大写的B），使用这个新函数重写countBs
 */
function countChar(str, char) {
    let ans = 0
    str.toString().split('').forEach(item => {
        if (item === char) ans++
    })
    return ans
}

console.log(countChar('countBs', 't'))

function countBs2(str) {
    return countChar(str, 'B')
}