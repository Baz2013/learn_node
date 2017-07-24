# learn_node
nodejs学习

## 安装依赖
当前目录下执行
```
npm install
```

## 测试
当前目录下执行
```
npm test
```

## 覆盖率 istanbul
这个软件以土耳其最大城市伊斯坦布尔命名，因为土耳其地毯世界闻名，而地毯是用来覆盖的。
```
./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha test/utils-test.js
```

## 断言库
should.js

## 学习笔记
[JavaScript基础](./doc/js_basic.md)

[常用命令](./doc/command.md)

## 参考:
[ECMAScript 6 入门](http://es6.ruanyifeng.com/#docs/destructuring)

[node.js单元测试:我要写测试](https://yq.aliyun.com/articles/7699?spm=5176.100239.blogcont4220.12.0AwIOD)

[npm-scripts](https://docs.npmjs.com/misc/scripts?spm=5176.100239.blogcont4220.9.0AwIOD)

[node.js单元测试:workflow](https://yq.aliyun.com/articles/4220)

[代码覆盖率工具Istanbul入门教程](http://www.ruanyifeng.com/blog/2015/06/istanbul.html)

[正则表达式30分钟入门教程](https://deerchao.net/tutorials/regex/regex.htm)

[JavaScript中的apply()方法和call()方法使用介绍](http://www.jb51.net/article/30883.htm)

[关于javascript中apply()和call()方法的区别](http://www.cnblogs.com/fighting_cp/archive/2010/09/20/1831844.html)


## 错误及解决
#### 使用istanbul执行覆盖率测试的时候报错
```shell
$ ./node_modules/.bin/istanbul cover ./node_modules/.bin/_mocha test/utils-test.js
No coverage information was collected, exit without writing coverage information
E:\GIT\learn_node\node_modules\.bin\_mocha:2
basedir=$(dirname "$(echo "$0" | sed -e 's,\\,/,g')")
          ^^^^^^^

SyntaxError: missing ) after argument list
    at createScript (vm.js:74:10)
    at Object.runInThisContext (vm.js:116:10)
    at Module._compile (module.js:533:28)
    at Object.Module._extensions..js (module.js:580:10)
    at Object.Module._extensions.(anonymous function) [as .js] (E:\GIT\learn_node\node_modules\istanbul\lib\hook.js:109:37)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Function.Module.runMain (module.js:605:10)
    at runFn (E:\GIT\learn_node\node_modules\istanbul\lib\command\common\run-with-cover.js:122:16)

```
把`./node_modules/.bin/_mocha`替换成`./node_modules/mocha/bin/_mocha`后问题解决

[coverage-report-with-istanbul-and-mocha](https://stackoverflow.com/questions/36940085/coverage-report-with-istanbul-and-mocha)

[githut-istanbul-issue677](https://github.com/gotwarlost/istanbul/issues/677)