/* let number = 153
function armstrong(num){
    let numstr = num.toString()
    let n = numstr.length
    let sum = 0
    for(i=1;i<n;i++){
       sum = sum + num[i**n]
    }
    if(sum == num){
        console.log('Number is an amstrong number')
    }
    else console.log('Number is not an amstrong number',sum)
} 
armstrong(number) */
/* 
let string = 'An apple a day keeps the doctor away'
function count(str,alpha){
    let strng = str.toLowerCase()
    let strLng = str.length
    let count = 0
    for(i=0;i<strLng;i++){
        if(strng[i]==alpha){
            count++
        }
    }
    console.log(count)
}
count(string,'a') */
/* 
let string = 'An apple a day keeps the doctor away'
function pop(str,word){
    spt = str.split(' ')
    index = spt.indexOf(word)
    spt.splice(index,1)
    jn = spt.join(' ')
    console.log(jn)
}
pop(string,'day') */
/* 
let string = 'An apple a day keeps the doctor away'
function find(str){
    let n = str.length
    for(i=0;i<n;i++){
        let found = 
    } 
} */
function rejPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('False')
        }, 2000);
    })
}

function resPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('True')
        }, 2000);
    })
}
/* Promise.all([rejPromise(),resPromise()]).then(res => {     //promise.all runs every promise, if only one is true will go to true
    console.log(res)
}).catch( err => {
    console.log
})
Promise.any([rejPromise(),resPromise()]).then(res => {    //promise.any runs only true, if both are true runs 1st promise, if both are false goes to catch
    console.log(res)
}).catch( err => {
    console.log
})
Promise.race([rejPromise(),resPromise()]).then(res => {
    console.log('In Race', res)
}).catch( err => {
    console.log('In catch',err)
}) */
Promise.allSettled([rejPromise(),resPromise()]).then(res => {      // promise.allSettled only then works even if it is a reject
    console.log('In allsettled then', res)
}).catch( err => {
    console.log('In catch',err)
})