// Regular expression
// ^ = start of the string
// $ = end of the string
// + = one or more
// * = zero or more
// ? = zero or none
// [] = range
// {} = length
// {min, max} = length minmax

let regularexp = /^[a-z]{3,4}$/;
let name = 'babas'
console.log(regularexp.test(name));