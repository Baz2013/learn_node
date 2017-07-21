
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
        case 'email': return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(str);
        case 'phone': return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel': return true;
        case 'number': return true;
        case 'english': return true;
        case 'chinese': return true;
        case 'lower': return true;
        case 'upper': return true;
        default: return true;
    }
}

let myJS = {
    sum: sum,
    trim: trim,
    changeCase: changeCase,
    repeatStr: repeatStr,
    replaceAll: replaceAll,
    replaceStr: replaceStr,
    checkType: checkType,
}

module.exports = myJS;
