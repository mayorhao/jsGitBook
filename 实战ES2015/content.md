### 关于Generator
1.声明
```javascript
    function* Generator(){
        //code here
    }
    const Generator=function*(){
        //code here
    }
```
注意到那个`*`号

2.生成器对象
generator不能像普通函数一样直接调用，调用会生成generator对象
```javascript
    const gen=Generator();
```
gen本身也是可以迭代的，可以用for-of 来迭代，在代码中我们已经试了，迭代出每次yield切出的值

