# JavaScript基础

## replace() 方法
### 定义和用法
replace() 方法用于在字符串中用一些字符替换另一些字符, 或替换一个与正则表达式匹配的子串。
### 语法
```javascript
stringOjbect.replace(regexp/substr, replacement)
```

|参数|描述|
|---|:---|
|regexp/substr|必需. 规定子字符串或要替换的模式的Regexp 对象.请注意,如果该值是一个字符串,则将它作为要检索的直接量文本模式,而不是首先被转化为Regexp对象.|
|replacement|必需. 一个字符串, 规定了替换文本或生成替换文本的函数|

## js正则表达式的$1,$2,$3...$9属性
$1 - $9存放着正则表达式中最近的9个正则表达式的匹配结果,这些结果按照匹配的出现顺序依次排列。
如：
``` javascript
if (3 == regArr.length && 0 == type ){
        regtext = '(\\w{' + regArr[0] + '})\\w{' + regArr[1] + '}(\\w{' + regArr[2] + '})';
        Reg = new RegExp(regtext);
        var replaceCount = repeatStr(replaceText, regArr[1]);
        return str.replace(Reg, '$1' + replaceCount + '$2');
    }
```
`$1,$2`分别表示前边两个括号匹配到的内容。

## JavaScript中的apply方法和call方法使用
apply()和call()的真正用武之地是能够扩充函数依赖运行的作用域,如果用传统的方法实现：

1. 每个函数都包含连个非继承而来的方法:apply()和call()
2. 他们的用途相同,都是在特定的作用域中调用函数
3. 接收参数方面不同,apply()接收两个参数,一个函数运行的作用域(this),另一个数参数数组.call()方法第一个参数与apply()方法相同，但传递给函数的参数必须列举出来。

例1.
```javascript
window.firstName = "diz"; 
window.lastName = "song"; 
var myObject = { firstName: "my", lastName: "Object" }; 
function HelloName() { 
　　console.log("Hello " + this.firstName + " " + this.lastName, " glad to meet you!"); 
} 
HelloName.call(window); //huo.call(this); 
HelloName.call(myObject); 
```

运行结果为:
```shell
Hello diz song glad to meet you! 
Hello my Object glad to meet you! 
```

例2.
```javascript
function sum(num1, num2) { 
    return num1 + num2; 
} 
console.log(sum.call(window, 10, 10)); //20 
console.log(sum.apply(window,[10,20])); //30
console.log(sum.call(null, 10, 10)); //20 
console.log(sum.apply(null,[10,20])); //30  
```

分析：在例1中,apply()和call()的真正用武之地是能够扩充函数赖以运行的作用域,如果想用传统的方法实现,如下代码:
```javascript
window.firstName = "diz"; 
window.lastName = "song"; 
var myObject = { firstName: "my", lastName: "Object" }; 
function HelloName() { 
    console.log("Hello " + this.firstName + " " + this.lastName, " glad to meet you!"); 
} 
HelloName(); //Hello diz song glad to meet you! 
myObject.HelloName = HelloName; 
myObject.HelloName(); //Hello my Object glad to meet you! 
```

可以发现,要想让HelloName()函数的作用在对象myObject上,我们需要动态创建myObject的HelloName属性,此属性作为指针指向HelloName()函数.这样,当我们调用myObject.HelloName()时,函数内部的this变量就指向myObject,也就可以调用该对象的内部其他公共属性了。 
通过分析例2,可以看到call()和apply()函数的真正运用之处,在实际项目中，还需要根据实际灵活加以处理！
