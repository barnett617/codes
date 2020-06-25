/**
 * 编写一个用console.log打印从1到100的数字，
 * 对于能被3整除的数字，打印Fizz，而不是数字
 * 对于能被5整除(但不能被3整除)的数字，打印Buzz，而不是数字
 */
function print() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

// print()

/**
 * 同时被3和5整除的数字打印 FizzBuzz，对于只能被3和5中的一个整除的数字仍打印 Fizz 和 Buzz
 */
function print2() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz')
        } else if (i % 3 === 0) {
            console.log('Fizz')
        } else if (i % 5 === 0) {
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

// print2()

/**
 * 答案的解法总是很优雅
 */
function print3() {
    for (var i = 0; i <= 100; i++) {
        let out = ''
        if (i % 3 === 0) out += 'Fizz'
        if (i % 5 === 0) out += 'Buzz'
        console.log(out || i) 
    }
}

print3()