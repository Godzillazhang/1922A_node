### 课程任务

> 我们的HTML和JS包括CSS都是从上到下执行的。那么在很多情况下，有些代码我们是希望在符合一定条件的情况下才能执行，否则不能执行。此时就需要用到一下逻辑分支语句。

* 学会使用条件语句
* 学会使用条件分支语句
* 学会使用选择分支语句
* 学会使用switch分支语句
* 学会使用分支语句的嵌套
---
### 条件语句
* 语法：
```javascript
//关键字：if
//括号内是判断条件
//大括号是：条件语句块
if(2>3){
    //TODO:Coding....
}
```
* 使用：
---
### 分支语句
* 语法：
```javascript
//关键字：if & else
//括号内是判断条件
//大括号是：条件语句块
if(2>3){
    //TODO:Coding....
}else{//分支语句
    //TODO:Coding....
}
```
* 使用：
---
### else if 选择分支语句
* 语法：
```javascript
//关键字：if & else if & else
//括号内是判断条件
//大括号是：条件语句块
if(2>3){
    //TODO:Coding....
}else if(2>1){
    //TODO:Coding....
}else if(2>0){
    //TODO:Coding....
}else{
    //TODO:Coding....
}
```
* 使用：
---
### switch 分支语句
```javascript
var express=0;
switch(express){
    case value1:
        //Coding....
        break;//结束当前代码块，一个大括号为一个代码块
    case value2:
        //Coding
        break;
    default:
        //Coding
        break;
}
```
* 使用：

### 分支语句的嵌套

```javascript
if(/*express1*/){
	if(/*express2*/){
    
    }else{
		
    }
}else{
    if(/*express3*/){
       
    }else if(/*express4*/){
                
    }else if(/*express5*/){

    }else{
        
    }
}
```

