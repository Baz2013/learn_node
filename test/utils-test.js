const assert = require('assert');

const myjs = require('../utils');

sum = myjs.sum;
trim = myjs.trim;
changeCase = myjs.changeCase;
repeatStr = myjs.repeatStr;
replaceAll = myjs.replaceAll;
replaceStr = myjs.replaceStr;

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
    });

    describe('#repeatStr()', () => {
        it("repeatStr('abc', 0) shoud return abc", () =>{
            assert.strictEqual(repeatStr('abc', 0), 'abc');
        });
        it("repeatStr('abc', 1) shoud return abcabc", () =>{
            assert.strictEqual(repeatStr('abc', 1), 'abcabc');
        });
        it("repeatStr('abc', 2) shoud return abcabcabc", () =>{
            assert.strictEqual(repeatStr('abc', 2), 'abcabcabc');
        });
    });

    describe('#replaceAll()', () => {
        it("replaceAll('abc3456zabcdGH$@','abc','OOO') should return OOO3456zOOOdGH$@", () => {
            assert.strictEqual(replaceAll('abc3456zabcdGH$@','abc','OOO'), 'OOO3456zOOOdGH$@');
        });
    });

});
