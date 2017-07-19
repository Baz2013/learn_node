
/*
  一些常用的函数实现
*/

function sum(...rest) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    return sum;
};


/**
 * 字符串去除空格
 * @param {*} str 
 * @param {*} type 1-所有空格 2-前后空格 3-前空格 4-后空格
 */
function trim(str, type){
    switch (type){
        case 1: return str.replace(/\s+/g,"");
        case 2: return str.replace(/(^\s*)|(\s*$)/g,"");
        case 3: return str.replace(/(^\s*)/g,"");
        case 4: return str.replace(/(\s*$)/g,"");
        default: return str;
    }
}


let myJS = {
    sum:sum,
    trim:trim,
}

module.exports = myJS;
