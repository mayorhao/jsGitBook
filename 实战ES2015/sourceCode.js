// fibonacci数列的基本实现
const fibonacci =[0,1];
const n = 10
for(let i=2;i<n-2;i++){
    fibonacci.push(fibonacci[i-1]+fibonacci[i-2])
}
// 使用迭代器
function* fibo(){
    let a=0;
    let b=1
    yield "第一次"
    yield "第二次"
    while(true){
        let next=a+b
        a=b
        b=next
        yield "hello"
    }
}
let generator=fibo();

for(var i=0;i<10;i++){

// console.log(generator.next());
}
function* genFn(){
    let a=2;
    let next;
    yield a;
    while (true) {
       next=a/(2*a+1);
       a=next;
       yield next;
    }
}
var fn=genFn();
// 测试for-of
var o=`fuck the sunshine`;
for(let a of o){
    // console.log(a);
}
for (var index = 0; index < 50; index++) {
    //  console.log(fn.next().value);   
}

//yield丢东西进来

function *get_adder(){
  let total = 0;
  while(true){
    console.log("before yield");
    total+=yield total;
    console.log("after yield, total:"+total);
  }
}

var adder = get_adder();
console.log(adder.next().value);
console.log(adder.next(100).value);
/**
 * 这个代码说明了，yield可以切出值，可以丢值进来。具体的过程是：
 * 程序运行到yield停止，切出值，下一个next继续运行，传入yield等待的值，切出下一个yield值
 */