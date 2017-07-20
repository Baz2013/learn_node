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

## 覆盖率
```
./node_modules/.bin/istanbul cover ./node_modules/mocha/bin/_mocha test/utils-test.js
```

## 学习笔记
[JavaScript基础](./doc/js_basic.md)

[常用命令](./doc/command.md)

## 参考
[node.js单元测试:我要写测试](https://yq.aliyun.com/articles/7699?spm=5176.100239.blogcont4220.12.0AwIOD)

[npm-scripts](https://docs.npmjs.com/misc/scripts?spm=5176.100239.blogcont4220.9.0AwIOD)

[node.js单元测试:workflow](https://yq.aliyun.com/articles/4220)

## 错误及解决
使用istanbul执行覆盖测试的时候报错
```
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