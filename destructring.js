let details = {
    name : 'Messi',
    role : 'Forward',
    team : 'Inter Miami FC',
    rating : 90
}
let {name, JNo = "10", ...others} = details

console.log(name, JNo)
console.log(others)
function playerDetails({name,rating,origin = 'Football'}){
    console.log(`The player ${name} has a rating of ${rating} in ${origin}`)
}
playerDetails(details)

// spread
let arr1 = [5,6,7,8,9]
console.log(...arr1);
console.log(...[1,2,3,4])
// rest
function rest(...value) {
    console.log(value)
}
rest(10,11,12,13)
//in  a function when rest operator is used anything after the rest parameter will result in an error
/* 
function ErSum(a,b,cb){
    if(typeof a!= 'number'|| typeof b!= 'number'){
        return cb('Not a number')
    }
    return cb(null,a+b)

}
ErSum('11',20,(err,result) => {
    if(err){
        console.log('Type error', err)
    }
    else {
        console.log('Sum is:',result)
    }
}) */
