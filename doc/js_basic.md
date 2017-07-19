# JavaScript基础

## replace() 方法
### 定义和用法
replace() 方法用于在字符串中用一些字符替换另一些字符, 或替换一个与正则表达式匹配的子串。
### 语法
```
stringOjbect.replace(regexp/substr, replacement)
```

|参数|描述|
|---|:---|
|regexp/substr|必需. 规定子字符串或要替换的模式的Regexp 对象.请注意,如果该值是一个字符串,则将它作为要检索的直接量文本模式,而不是首先被转化为Regexp对象.|
|replacement|必需. 一个字符串, 规定了替换文本或生成替换文本的函数|