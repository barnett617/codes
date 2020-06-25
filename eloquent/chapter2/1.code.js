/**
 * 使用console.log循环输出以下三角形
 * #
 * ##
 * ###
 * ####
 * #####
 * ######
 * #######
 */

function loopTriangles() {
    for (var i = 1; i <= 7; i++) {
        var out = ''
        for (var j = 1; j <= i; j++) {
            out += '#'
        }
        console.log(out)
    }
}
// loopTriangles()


// #
// ##
// ###
// ####
// #####
// ######
// #######


function loopTriangles2() {
    var iterator = 1
    while (iterator <= 7) {
        var current = 1
        var out = ''
        while (current++ <= iterator) {
            out += '#'
        }
        console.log(out)
        iterator++
    }
}

// loopTriangles2()

// #
// ##
// ###
// ####
// #####
// ######
// #######

function loopTriangles3() {
    for (var i = 1; ; i++) {
        var out = ''
        for (var j = 1; j <= i; j++) {
            out += '#'
        }
        console.log(out)
        if (i === 7) break
    }
}

// loopTriangles3()

// #
// ##
// ###
// ####
// #####
// ######
// #######

/**
 * 逻辑是对的，但是代码易读性差
 */
function loopTriangles4 () {
    var count = 1
    do {
        var out = ''
        var current = 1
        do {
            out += '#'
        } while (current++ < count)
        console.log(out)
    } while (count++ < 7)
}

// loopTriangles4()

// #
// ##
// ###
// ####
// #####
// ######
// #######

/**
 * 标准解法很简洁，巧用了要输出的内容作为迭代变量
 */
function loopTriangles5 () {
    for (var out = '#'; out.length <= 7; out += '#') {
        console.log(out)
    }
}

loopTriangles5()