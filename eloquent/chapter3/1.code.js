/**
 * 从1开始，重复加5或者乘以3，可以生成一个由无数的数字组成的集合
 * 对于一个给定的数字，要找到产生这个数字的一系列这样的加法或乘法
 */
function findSolution(target) {
    var count = 0
    function find(current, history) {
        console.log(++count, current, history)
        if (current === target) {
            return history
        } else if (current > target) {
            return null
        } else {
            return find(current + 5, `(${history} + 5)`) || 
            find(current * 3, `(${history} * 3)`)
        }
    }
    return find(1, '1')
}

// console.log(findSolution(24))

// 1 1 1
// 2 6 (1 + 5)
// 3 11 ((1 + 5) + 5)
// 4 16 (((1 + 5) + 5) + 5)
// 5 21 ((((1 + 5) + 5) + 5) + 5)
// 6 26 (((((1 + 5) + 5) + 5) + 5) + 5)
// 7 63 (((((1 + 5) + 5) + 5) + 5) * 3)
// 8 48 ((((1 + 5) + 5) + 5) * 3)
// 9 33 (((1 + 5) + 5) * 3)
// 10 18 ((1 + 5) * 3)
// 11 23 (((1 + 5) * 3) + 5)
// 12 28 ((((1 + 5) * 3) + 5) + 5)
// 13 69 ((((1 + 5) * 3) + 5) * 3)
// 14 54 (((1 + 5) * 3) * 3)
// 15 3 (1 * 3)
// 16 8 ((1 * 3) + 5)
// 17 13 (((1 * 3) + 5) + 5)
// 18 18 ((((1 * 3) + 5) + 5) + 5)
// 19 23 (((((1 * 3) + 5) + 5) + 5) + 5)
// 20 28 ((((((1 * 3) + 5) + 5) + 5) + 5) + 5)
// 21 69 ((((((1 * 3) + 5) + 5) + 5) + 5) * 3)
// 22 54 (((((1 * 3) + 5) + 5) + 5) * 3)
// 23 39 ((((1 * 3) + 5) + 5) * 3)
// 24 24 (((1 * 3) + 5) * 3)
// (((1 * 3) + 5) * 3)

/**
 * 是不是可以先尝试乘法，让步子迈的大一点，更快的试错
 * @param {*} target 
 */
function findSolution2(target) {
    var count = 0
    function find(current, history) {
        console.log(++count, current, history)
        if (current === target) {
            return history
        } else if (current > target) {
            return null
        } else {
            return find(current * 3, `(${history} * 3)`) ||
            find(current + 5, `(${history} + 5)`)  
        }
    }
    return find(1, '1')
}

console.log(findSolution2(24))

// 1 1 1
// 2 3 (1 * 3)
// 3 9 ((1 * 3) * 3)
// 4 27 (((1 * 3) * 3) * 3)
// 5 14 (((1 * 3) * 3) + 5)
// 6 42 ((((1 * 3) * 3) + 5) * 3)
// 7 19 ((((1 * 3) * 3) + 5) + 5)
// 8 57 (((((1 * 3) * 3) + 5) + 5) * 3)
// 9 24 (((((1 * 3) * 3) + 5) + 5) + 5)
// (((((1 * 3) * 3) + 5) + 5) + 5)