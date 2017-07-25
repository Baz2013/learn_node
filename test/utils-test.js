const assert = require('assert');

const myjs = require('../utils');

const shoud = require('should');

sum = myjs.sum;
trim = myjs.trim;
changeCase = myjs.changeCase;
repeatStr = myjs.repeatStr;
replaceAll = myjs.replaceAll;
replaceStr = myjs.replaceStr;
replaceStr = myjs.replaceStr;
checkType = myjs.checkType;
checkPwd = myjs.checkPwd;
removeRepeat = myjs.removeRepeat;
minArr = myjs.minArr;
maxArr = myjs.maxArr;
averageArr = myjs.averageArr;
sumArr = myjs.sumArr;
randomOne = myjs.randomOne;
getEleCnt = myjs.getEleCnt;

describe('#hello.js', () => {

    describe('#sum()', () => {
        it('sum() should return 0', () => {
            assert.strictEqual(sum(), 0);
        });

        it('sum(1) should return 1', () => {
            assert.strictEqual(sum(1), 1);
        });

        it('sum(1, 2) should return 3', () => {
            assert.strictEqual(sum(1, 2), 3);
        });

        it('sum(1, 2, 3) should return 6', () => {
            assert.strictEqual(sum(1, 2, 3), 6);
        });
    });

    describe('#trim()', () => {
        it("trim(' abcd  ff  ', 1) should return abcdff", () => {
            assert.strictEqual(trim(' abcd  ff  ', 1), 'abcdff'); 
        });
        it("trim(' abcd  ff  ', 5) should return  abcd  ff  ", () => {
            assert.strictEqual(trim(' abcd  ff  ', 5), ' abcd  ff  '); 
        });
        it("trim(' abcd  ff  ', 2) should return abcd  ff", () => {
            assert.strictEqual(trim(' abcd  ff  ', 2), 'abcd  ff'); 
        });
        it("trim(' abcd  ff  ', 3) should return abcd  ff  ", () => {
            assert.strictEqual(trim(' abcd  ff  ', 3), 'abcd  ff  ');
        });
        it("trim(' abcd  ff  ', 4) should return  abcd  ff", () => {
            assert.strictEqual(trim(' abcd  ff  ', 4), ' abcd  ff'); 
        });
    });

    describe('#changeCase()', () => {
        it("changeCase('abcd', 1) shoud return Abcd", () => {
            assert.strictEqual(changeCase('abcd', 1), 'Abcd');
        });
        it("changeCase('ABCD', 2) shoud return aBCD", () => {
            assert.strictEqual(changeCase('ABCD', 2), 'aBCD');
        });
        it("changeCase('abCD', 3) shoud return ABcd", () => {
            assert.strictEqual(changeCase('abCD', 3), 'ABcd');
        });
        it("changeCase('aBcd', 4) shoud return ABCD", () => {
            assert.strictEqual(changeCase('aBcd', 4), 'ABCD');
        });
        it("changeCase('aBcd', 5) shoud return abcd", () => {
            assert.strictEqual(changeCase('aBcd', 5), 'abcd');
        });
        it("changeCase('Abcd') shoud return Abcd", () => {
            assert.strictEqual(changeCase('Abcd', 1), 'Abcd');
        });
        it("changeCase('ABCD#$12', 2) shoud return aBCD#$12", () => {
            assert.strictEqual(changeCase('ABCD#$12', 2), 'aBCD#$12');
        });
        it("changeCase('ABCD#$12', 6) shoud return ABCD#$12", () => {
            assert.strictEqual(changeCase('ABCD#$12', 6), 'ABCD#$12');
        });
    });

    describe('#repeatStr()', () => {
        it("repeatStr('abc', 0) shoud return \'\'", () =>{
            assert.strictEqual(repeatStr('abc', 0), '');
        });
        it("repeatStr('abc', 1) shoud return abc", () =>{
            assert.strictEqual(repeatStr('abc', 1), 'abc');
        });
        it("repeatStr('abc', 2) shoud return abcabc", () =>{
            assert.strictEqual(repeatStr('abc', 2), 'abcabc');
        });
    });

    describe('#replaceAll()', () => {
        it("replaceAll('abc3456zabcdGH$@','abc','OOO') should return OOO3456zOOOdGH$@", () => {
            assert.strictEqual(replaceAll('abc3456zabcdGH$@','abc','OOO'), 'OOO3456zOOOdGH$@');
        });
    });

    describe('#replaceStr()', () => {
        it("replaceStr('18819322663',[3,5,3],0) shoud return 188*****663", () =>{
            assert.strictEqual(replaceStr('18819322663',[3,5,3],0), '188*****663');
        });
        it("replaceStr('18819322663',[3,5,3],1) shoud return ***19322***", () =>{
            assert.strictEqual(replaceStr('18819322663',[3,5,3],1), '***19322***');
        });
        it("replaceStr('1asd88465asdwqe3',[5],0) shoud return *****8465asdwqe3", () =>{
            assert.strictEqual(replaceStr('1asd88465asdwqe3',[5],0), '*****8465asdwqe3');
        });
        it("replaceStr('1asd88465asdwqe3',[5],1,'+') shoud return 1asd88465as+++++", () =>{
            assert.strictEqual(replaceStr('1asd88465asdwqe3',[5],1,'+'), '1asd88465as+++++');
        });
    });
    describe('#checkType()', () => {
        it("checkType('165226226326','phone') shoud return false", () =>{
            assert.strictEqual(checkType('165226226326','phone'), false);
        });
        it("checkType('sd4313@163.com','mail') shoud return true", () =>{
            assert.strictEqual(checkType('sd4313@163.com','mail'), true);
        });
        it("checkType('sd.4313bing@163.com','mail') shoud return true", () =>{
            assert.strictEqual(checkType('sd.4313bing@163.com','mail'), true);
        });
        it("checkType('sd4313163.com','mail') shoud return false", () =>{
            assert.strictEqual(checkType('sd4313163.com','mail'), false);
        });
        it("checkType('010-8837899','tel') shoud return true", () =>{
            assert.strictEqual(checkType('010-8837899','phone'), true);
        });
        it("checkType('8837899','number') shoud return true", () =>{
            assert.strictEqual(checkType('8837899','number'), true);
        });
        it("checkType('8837899a','number') shoud return false", () =>{
            assert.strictEqual(checkType('8837899a','number'), false);
        });
        it("checkType('你好','chinese') shoud return true", () =>{
            assert.strictEqual(checkType('你好','chinese'), true);
        });
    });

    describe('#checkPwd()', () => {
        it("checkPwd('abc') should return 0", () => {
            assert.strictEqual(checkPwd('abc'), 0);
        });
        it("checkPwd('12asdASAD') should return 3", () => {
            assert.strictEqual(checkPwd('12asdASAD'), 3);
        });
        it("checkPwd('12asd|abc|ASAD') should return 4", () => {
            assert.strictEqual(checkPwd('12asd|abc|ASAD'), 4);
        });
    });

    describe('#removeRepeat()', () => {
        it("removeRepeat(['a', 'a', 'b', 'b', 'c']) should return ['a','b','c']", () => {
            assert.deepEqual(removeRepeat(['a', 'a', 'b', 'b', 'c']), ['a', 'b', 'c']);
        });
    });

    describe('#maxArr()', () => {
        it("maxArr([4,9,19,1,4,6]) should return 19", () => {
            assert.strictEqual(maxArr([4,9,19,1,4,6]), 19);
        });
    });

    describe('#minArr()', () => {
        it("minArr([4,9,19,1,4,6]) should return 1", () => {
            assert.strictEqual(minArr([4,9,19,1,4,6]), 1);
        });
    });

    describe('#sumArr()', () => {
        it("sumArr([3,9,19,1,4,6]) should return 42", () => {
            assert.strictEqual(sumArr([3,9,19,1,4,6]), 42);
        });
    });

    describe('#averageArr()', () => {
        it("averageArr([3,9,19,1,4,6]) should return 7", () => {
            assert.strictEqual(averageArr([3,9,19,1,4,6]), 7);
        });
    });

    describe('#randomOne()', () => {
        it("randomOne([3,9,19,1,4,6]) should return 7", () => {
            let t = randomOne([3,9,19,1,4,6]);
            [3,9,19,1,4,6].should.containEql(t);
        });
    });

    describe('#getEleCnt()', () => {
        it("getEleCnt([4,9,19,1,4,6], 4) should return 2", () => {
            let t = getEleCnt([4,9,19,1,4,6], 4);
            t.should.equal(2);
        });
        it("getEleCnt([4,9,19,1,4,6], 5) should return 0", () => {
            let t = getEleCnt([4,9,19,1,4,6], 5);
            t.should.equal(0);
        });
        it("getEleCnt('abcddefdd', 'd') should return 4", () => {
            let t = getEleCnt('abcddefdd', 'd');
            t.should.equal(4);
        });
    });

});
