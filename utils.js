
/*
  一些常用的工具函数实现
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

/**
 * 字母大小写转换
 * @param {*} str 原始字符串
 * @param {*} type 1-首字母大写 2-首字母小写 3-大小写转换 4-全部大写 5-全部小写
 */
function changeCase(str, type){
    switch(type){
        case 1: return str.replace(/^(\w)(\w+)/, (v,v1,v2) => {
            //v 是原始字符串,即str
            return v1.toUpperCase() + v2.toLowerCase();
        }); 
        case 2: return str.replace(/^(\w)(\w+)/, (v,v1,v2) => {
            return v1.toLowerCase() + v2.toUpperCase();
        });
        case 3: return str.replace(/^([a-z]+)([A-Z]+)/,(v,v1,v2) => {
            return v1.toUpperCase() + v2.toLowerCase();
        });
        case 4: return str.toUpperCase();
        case 5: return str.toLowerCase();
        default: return str;               
    }
}

/**
 * 字符串循环复制
 * @param {*} str 
 * @param {*} count 复制次数
 */
function repeatStr(str, count){
    var res = '';
    for (let i = 0; i < count; i++){
        res += str;
    }

    return res;
}

/**
 * 字符串替换
 * @param {*} str 
 * @param {*} AFindText 
 * @param {*} ARepText 
 */
function replaceAll(str, AFindText, ARepText){
    reRegExp = new RegExp(AFindText, "g");
    return str.replace(reRegExp,ARepText);
}

/**
 * 替换*###
 * @param {*} str 字符串
 * @param {*} regArr 字符格式
 * @param {*} type 替换方式
 * @param {*} ARepText 替换的字符串(默认*)
 */
function replaceStr(str, regArr, type, ARepText){
    var regtext = '';
    var Reg = null;
    var replaceText = ARepText || '*';

    if (3 === regArr.length && 0 === type ){
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})';
        Reg = new RegExp(regtext);
        let replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2');
    }
    else if (3 === regArr.length && 1 === type){
        regtext = '\\w{' + regArr[0] + '}(\\w{' + regArr[1] + '})\\w{' + regArr[2] + '}';
        Reg = new RegExp(regtext);
        let replaceCount1 = repeatStr(replaceText, regArr[0]);
        let replaceCount2 = repeatStr(replaceText, regArr[2]);
        return str.replace(Reg, replaceCount1 + '$1' + replaceCount1);
    }
    else if(1 === regArr.length && 0 === type){
        regtext = '(^\\w{' + regArr[0] + '})';
        Reg = new RegExp(regtext);
        let replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount);
    }
    else if ( 1 === regArr.length && 1 === type){
        regtext = '(\\w{' + regArr[0] + '}$)';
        Reg = new RegExp(regtext);
        let replaceCount = repeatStr(replaceText, regArr[0]);
        return str.replace(Reg, replaceCount);
    }
}

/**
 * 检测字符串
 * @param {*} str 
 * @param {*} type 
 */
function checkType(str, type){
    switch(type){
        case 'email': return /^\w+([-+.]\w+)*\@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
        case 'phone': return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel': return /^0\d{2,3}-\d{7,8}(-\d{1,4})?$/.test(str);
        case 'number':return /^[0-9]+$/.test(str);
        case 'english': return /^[a-zA-Z]+$/.test(str);
        case 'chinese': return /^[\u4E00-\u9FA5]+$/.test(str);;
        case 'lower': return /^[a-z]+$/.test(str);;
        case 'upper': return /^[A-Z]+$/.test(str);;
        default: return true;
    }
}

/**
 * 检测密码强度
 * @param {*} str 
 */
function checkPwd(str){
    let nowLv = 0;
    if (str.length < 6){
        return nowLv;
    }
    if (/[0-9]/.test(str)){
        nowLv++;
    }
    if (/[a-z]/.test(str)){
        nowLv++;
    }
    if (/[A-Z]/.test(str)){
        nowLv++;
    }
    if (/[\.|-|_]/.test(str)){
        nowLv++;
    }

    return nowLv;
}

/**
 * 数组去重:
 * ES6新增的Set数据结构，类似于数组，但是里面的元素都是
 * 唯一的，其构造函数可以接受一个数组作为参数
 * ES6中Arrary新增了一个静态方法from，可以把类似数组的
 * 对象转换为数组
 * @param {*} arr 
 */
function removeRepeat(arr){
    return Array.from(new Set(arr));
}

/**
 * 数组顺序打乱
 */
function upsetArr(arr){
    return arr.sort(() => {
        return Math.random() - 0.5;
    });
}

/**
 * 数组最大值
 * @param {*} arr 数值型数组
 */
function maxArr(arr){
    return Math.max.apply(null, arr);
}

/**
 * 数组最小值
 * @param {*} arr 数值型数组
 */
function minArr(arr){
    return Math.min.apply(null, arr);
}

/**
 * 数组求和
 * @param {*} arr 
 */
function sumArr(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

/**
 * 求数组平均数
 * @param {*} arr 
 */
function averageArr(arr){
    let sum = sumArr(arr);
    return sum / arr.length;
}

function randomOne(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

let myJS = {
    sum: sum,
    trim: trim,
    changeCase: changeCase,
    repeatStr: repeatStr,
    replaceAll: replaceAll,
    replaceStr: replaceStr,
    checkType: checkType,
    checkPwd: checkPwd,
    removeRepeat: removeRepeat,
    maxArr: maxArr,
    minArr: minArr,
    sumArr: sumArr,
    averageArr: averageArr,
    randomOne: randomOne,
}

module.exports = myJS;
