//默认参数为10的curry化
let add=(a,b)=>a+b;
function curriedAdd(fn){
    var args=Array.prototype.slice.call(arguments,1);
    return function(){
        var innerArgs=Array.prototype.slice.call(arguments);
        var finalArgs=args.concat(innerArgs);
        return fn.apply(null,finalArgs);
    }
}
var curried=curriedAdd(add,10);
var res=curried(5);

//提前绑定了this的bind函数
//原始的bind
function bind(fn,context){
    return fn.apply(context,arguments);
}