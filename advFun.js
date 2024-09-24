/* function sum(a,b) {
    console.log('The sum is', a)
    if(a<50){
       return sum(a+b,10)
    }
    return a
}
console.log(sum(10,20))

let alph = ['a','b','c','d','e','f','g']
function del(arr){
    let lng = arr.length
    if(lng>0){
        console.log('array now is',arr)
        arr.pop()
        del(arr)
    }
}
del(alph) */
/* let j = 0;
function princhar(str){
    console.log(str[j])
    if(str.length-1>j){ j++; return princhar(str)}
    else {
        j=0
    }
}
let i=0
    function printarr(arr){
        if(arr.length > i){
            princhar(arr[i])
            i++
            return printarr(arr)
        }
    }
printarr(['ABC','DEF','GHI','JKL']) */
/* 
function sum(){
    let count = 0
    console.log('Inner function')
    return () => {
        count ++
        console.log('Hi', count, 'Times')
        return 'Good'
    }
}
let reult = sum()
reult()
reult()
reult()
reult()
 */
/* 
 function volume(a){
    return (b) => {
        return (c) => {
            return a*b*c
        }
    }
 }
 let result = volume(10)(20)(20)
 console.log(result,'m^3') */
 /* 
 try {
    console.log('Hello there')
    noInt
 } catch (error) {
    console.log('An error occured',error)
 } */
/* 
    try {
        setTimeout(function() {
          noSuchVariable; // script will die here
        }, 1000);
      } catch (err) {
        alert( "won't work" );
      } */
/* try {
  lalala; // error, variable is not defined!
} catch (err) {
  console.log(err.name); // ReferenceError
  console.log(err.message); // lalala is not defined
  console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

  // Can also show an error as a whole
  // The error is converted to string as "name: message"
  console.log(err); // ReferenceError: lalala is not defined
} */

// write a javascript function to count the occurance of each of the word in a given element
//input - the quick brown fox jumps over the lazy dog jump over the fence
/* 
function split(arr) {
    let obj ={};
   /*  for(i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            return arr[i]
        }
        else {
            arr
        }
    } 
   arr.forEach(function(element) {
    if(element[obj]){
        element[obj] +=1
    }
    else {
        element[obj] = 1
    }
   });
   return obj
}
let word = 'the quick brown fox jumps over the lazy dog jump over the fence'
let array = word.split(' ')
/* console.log(array) 
let result = split(array)
console.log(result) */

// reverse words in a sentence
/* 
function reverse(value){
    let result = value.split('').reverse().join('')
    let result2 = value.split('').map(item=>{
        return item.split('').reverse().join('')}).join('')
    
    console.log(result)
    console.log(result2)

}
reverse('I am a developer')
 */
/* 
let array = [25,10,81,3,11,1,100]
// find the Nth largest number
// n is 3

function Nlarge(arr,N){
    arr.sort((a,b) => b-a)
    return arr[N-1]
}
console.log(Nlarge(array,3)) */

//write a function to destructure the given array and
//return the multiple of b and c
//[600,1200,2000,50,40]

/* let b,c;
[b,c]=[600,1200]
/* console.log(b*c) */
/*
let desc = [
    (a=10, b=20, c=30),
    (a=10, b=30, c=40),
    (a=30, b=40, c=50),
    (a=30, c=50),
    (a=30, b=40)
]
function add(b=1,c=1){
    return b*c
}
console.log(desc.map(it */
