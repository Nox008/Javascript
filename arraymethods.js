let obj = [
    {
        name: "stud1", stud_marks : 70,  
        langKnown : ['Tamil', 'English', 'Kannada', 'Malayalam'],
        isPassed: false,
    },
    {
        name: "stud2", marks : 90,
        langKnown : ['Tamil', 'Malayalam'],
        isPassed: true,
    },
    {
        name: "stud3", marks : 90,
        langKnown : ['Kannada', 'Malayalam'],
        isPassed: false,
    },
    {
        name: "stud4", marks : 90,
        langKnown : ['Tamil', 'English'],
        isPassed: true
    }
]
/* let length = obj.length
console.log(obj[1].langKnown)
for(i=0;i>=length -1;i++){
    if(obj[i].langKnown[] == 'Malayalam'){
        console.log(obj[i].name)
    }
} */
/* 
console.log(obj.filter((obj) => obj.langKnown.includes('Malayalam')))
console.log(obj.filter((obj) => obj.langKnown.includes('Malayalam')&& obj.isPassed))   */

let studDetails = [
    {
        'Name': 'Adam', Age: '5', Languages: ['tamil', 'english', 'Japanese', 'french'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 50 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 30 } }
    },
    {
        'Name': 'Madam', Age: '17', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'No',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 40 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 60 } }
    },
    {
        'Name': 'madam', Age: '21', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 60 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 50 } }
    },
    {
        'Name': 'Name', Age: '35', Languages: ['Tamil', 'Dutch', 'tamil'], isLoggedIn: 'No',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 80 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 40 } }
    },
    {
        'Name': 'Jhon', Age: '20', Languages: ['Malayalam', 'Dutch', 'Malayalam'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 10 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 30 } }
    },
    {
        'Name': 'Deo', Age: '49', Languages: ['Malayalam', 'Dutch', 'tamil'], isLoggedIn: 'Yes',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 90 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 20 } }
    },
    {
        'Name': 'madam a Madam', Age: '71', Languages: ['Malayalam', 'Dutch', 'dutch'], isLoggedIn: 'No',
        marks: { 'English': { 'marks_total': 100, 'marks_obtained': 16 }, 'Physics': { 'marks_total': 100, 'marks_obtained': 100 } }
    }
]

// 1. Find the name of the students age above 20.
// 2. Find the name of the students who knows malayalam and dutch.
// 3. How many students in the array.
// 4. Find the name of the student who as obtained marks above 40 in Physics and english.
// 5. Find the percentage of total marks obtained.
// 6. Find the age below 45 and who knows the language malayalam.
// 7. Find the name is palindrome or not.
// 8. Find the name of the students who age is prime number.
// 9. Find the name in ascending order according to physics marks.
// 10. Remove the duplicates in language.
// 11. Find the students name who are logged in and their age must be above 10 and they know malayalam.
// 12. Find the students name who are got fail mark in both the subjects. pass-limit 50
// 13. Find the Palindrome in Language and return their student's name

// 1
/* 
let studentAge = studDetails.filter((a) =>(a.Age>20))
let studentName = studentAge.map(student => student.Name)
console.log(studentName) */

/* let b =[]
studDetails.filter(a => a.Age>20 ? b.push(a.Name):'')
console.log(b) */

// 2
/* 
let langK = studDetails.filter((a) => a.Languages = ['Malayalam'] && ['Dutch'])
let studname = langK.map( student => student.Name)
console.log(studname) */
/* 
let b =[]
studDetails.filter(a => a.Languages.includes('Malayalam') && a.Languages.includes('Dutch') ? b.push(a.Name):'')
console.log(b)
 */

// 3
/* 
let nStud = studDetails.length;
console.log('No of students = ', nStud) */

// 4
/* 
let b =[]
studDetails.filter(a => a.marks.Physics.marks_obtained>40 && a.marks.English.marks_obtained>40 ? b.push(a.Name):'')
console.log(b) */

// 5
/*  
let studNo = studDetails.length;
let perc = 0
let totalMarks = 0
for(i=0;i<studNo;i++){
    totalMarks = studDetails[i].marks.English.marks_obtained + studDetails[i].marks.Physics.marks_obtained
    perc = (totalMarks/200)*100
    console.log(`${studDetails[i].Name} has a percentage of ${perc}`)
}
 
 */
// 6
/* 
let b =[]
studDetails.filter(a => a.Age<45 && a.Languages.includes('Malayalam') ? b.push(a.Name):'')
console.log(b)
 */

// 7
/* 
let isPalindrome = str => {
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
};

studDetails.forEach(student => {
    let name = student.Name;
    console.log(`${name} is ${isPalindrome(name) ? '' : 'not '}a palindrome.`);
}); */

// 8


let isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
};

let primeAgeStudents = studDetails.filter(student => isPrime(parseInt(student.Age)));

primeAgeStudents.forEach(student => {
    console.log(student.Name);
});