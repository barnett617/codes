/**
 * 创建一个 8 x 8 网格的字符串，用换行字符分隔行，网格每个位置都有一个空格或 # 字符
 * 这些字符应该组成一个国际象棋棋盘，即空格和 # 交错
 * 类似
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 */
function chessboard() {
    for (var i = 1; i <= 8; i++) {
        var out = i % 2 === 0 ? '#' : 'o'
        for (var j = 1; j < 8; j++) {
            var current = out[j - 1] === '#' ? 'o' : '#'
            out += current
        }
        console.log(out)
    }
}
// chessboard()

// o#o#o#o#
// #o#o#o#o
// o#o#o#o#
// #o#o#o#o
// o#o#o#o#
// #o#o#o#o
// o#o#o#o#
// #o#o#o#o

/**
 * 棋盘的宽高变的可变
 */
function chessboard2(width, height) {
    for (var i = 1; i <= height; i++) {
        var out = i % 2 === 0 ? '#' : 'o'
        for (var j = 1; j <= width; j++) {
            var current = out[j - 1] === '#' ? 'o' : '#'
            out += current
        }
        console.log(out)
    }
}

// chessboard2(8, 8)

// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o
// #o#o#o#o#

// chessboard2(8, 9)

// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o
// #o#o#o#o#
// o#o#o#o#o

/**
 * 答案总是出奇的开脑洞
 */
function chessboard3() {
    var out = ''
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 === 0) {
                out += 'o'
            } else {
                out += '#'
            }
        }
        out += '\n'
    }
    console.log(out)
}

chessboard3()