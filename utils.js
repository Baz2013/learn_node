function sum(...rest) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    return sum;
};



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
