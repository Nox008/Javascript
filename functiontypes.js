/* function sum(a,b){
    return a+b;
}
function mult(a,b){
    return a*b;
}
function calc(a,b,c){
    return c(a,b)
}
let a = 3;
let b = 4;
console.log(calc(a,b,sum))
console.log(calc(a,b,mult))        // right = calc(a,b,mult)    wrong = calc(a,b,mult())  
console.log(calc(4,6,function add(a,b){ return a+b }))
console.log(calc(4,6,(a,b) => a*b)) */
/* 
let msg = 'I am not empty';
console.log(msg);
/* let timeout = setTimeout(() => {
    msg = 'I have changed';
    console.log(msg)
}, 4000); */ /*
setTimeout(() => {
    msg = '4';
    console.log(msg)
}, 1000);
setTimeout(() => {
    msg = '3';
    console.log(msg)
}, 2000);
setTimeout(() => {
    msg = '2';
    console.log(msg)
}, 3000);
setTimeout(() => {
    msg = '1';
    console.log(msg)
}, 4000);
setTimeout(() => {
    msg = 'Changed!!!';
    console.log(msg)
}, 5000);
console.log('Message will be printed in 4s')
// clearTimeout(timeout,3000)
function timeout(){
    setTimeout(() => {
        msg = 'Hello there'
        console.log(msg)
    }, 6000);
    if(msg == 'Hello there'){
        clearTimeout(timeout())
    }
    else {
        console.log('Hi there')
    }
}
timeout() */
/* 
function timeout(time){
    setTimeout(() => {
        msg = 'Hello'
        console.log(msg);
    }, time);
}
let msg = 'Hi'
console.log(msg)
timeout(5000)
 */
// let count = 10;
/* let timer = setInterval(() => {
    console.log(count)
    count -- ;
    if(count<0){
        clearInterval(timer)
    }
}, 1000); */
/* 
function countdown(count){
    let countD = setInterval(() =>{
    console.log(count)
    console.log('Bonk')
    count ++
    if(count>10){
        clearInterval(countD)
    }
}, 1000);
}
countdown(0) */
/* 
let promise = new Promise((resolve, reject) => {
    if(1==0){
        resolve('Not true')
    }
    else(1==1)
        reject('True')
    
})
promise.then(resolve => console.log('Inside promise',resolve)).catch(reject => console.log('Rejected', reject))

function prom(){
    return new Promise((res, rej) => {
        if(1==1){
            res('Correct')
        }
        else(1==0) 
        rej('Incorrect')
    })
}
prom().then(res => (console.log('Resolved',res))).catch(rej => (console.log('Unresolved',rej))) */

//Task 1
//Write a function that returns a promise which
//resolves with a given value after a specific delay
/* 
function promise(value){
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve('True')
        }, value);
        
    })
}
promise(1000).then(resolve => (console.log(resolve))) */

//Task 2
//write a function that returns a promise which rejects
//with an error message after a delay. handle rejection using catch
/* 
function promise(value){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
                reject('False')
        }, value);
        
    })
}
promise(1000).catch(reject => (console.log(reject))) */

//Task 3
//write a function that returns a promise with 
/* 
function double(value){
    return new Promise((resolve) => {
      resolve(value*2)  
    })
}
double(10).then(value => (double(value).then(vlaue1 => (double(vlaue1)))) (console.log(value))) */

/* calcFun = (a,b,operation) => {
    return new Promise((res)=>{
        switch(operation){
            case "add" : 
            result = a + b;
            break
            case "mul" : 
            result = a * b;
            break
            case "div" : 
            result = a / b;
            break
            case "sub" : 
            result = a - b;
            break 
        }
        return res(result)
    })
}
calcFun(20,10,'add')
  .then((additionResult) => {
    return calcFun(additionResult,2,'mul');
  })
  .then((multiplicationResult) => {
    return calcFun(multiplicationResult,2,'div');
  })
  .then((divisionResult) => {
    console.log("Division Result is",divisionResult);
    return calcFun(divisionResult,2,'sub');
  })
  .then((substractionResult) => {
    console.log("Substraction Result is",substractionResult);
  }) */