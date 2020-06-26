/**
 * 编写一个函数，拥有两个参数，分别表示奶牛的数量和鸡的数量
 * 数量总是三位数，如果不足三位数，则在前面补0
 */
function printFarmInventory(cows, chickens) {
    let cowString = String(cows)
    while (cowString.length < 3) {
        cowString = '0' + cowString
    }
    console.log(`${cowString} cows`)
    let chickenString = String(chickens)
    while (chickenString.length < 3) {
        chickenString = '0' + chickenString
    }
    console.log(`${chickenString} chickens`)
}
// printFarmInventory(7, 11)

// 007 cows
// 011 chickens

/**
 * 当加入统计猪的数量，上面的函数是不是要进行修改
 * 改造如下
 */
function printZeroPaddedWithLabel(num, label) {
    let numString = String(num)
    while (numString.length < 3) {
        numString = '0' + numString
    }
    console.log(`${numString} ${label}`)
}

function printFarmInventory2(cows, chickens, pigs) {
    printZeroPaddedWithLabel(cows, 'Cows')
    printZeroPaddedWithLabel(chickens, 'Chickens')
    printZeroPaddedWithLabel(pigs, 'Pigs')
}

// printFarmInventory2(7, 11, 3)

// 007 Cows
// 011 Chickens
// 003 Pigs

/**
 * 但是 printZeroPaddedWithLabel 函数混杂了打印任务、填充0和添加标签
 * 改进如下
 */
function zeroPad(num, width) {
    let numString = String(num)
    while (numString.length < width) {
        numString = '0' + numString
    }
    return numString
}

function printFarmInventory3(cows, chickens, pigs) {
    console.log(`${zeroPad(cows, 3)} Cows`)
    console.log(`${zeroPad(chickens, 3)} Chickens`)
    console.log(`${zeroPad(chickens, 3)} Pigs`)
}

printFarmInventory3(7, 11, 3)

// 007 Cows
// 011 Chickens
// 011 Pigs