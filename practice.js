console.log("Hello World");
//alert("me");
//document.write("this is docuiment write")
//console.error("this is an error")
//console.warn("this is a warning")

// there are two types of data types in javascript
/*
1.Primitive Data Type - Undefine, null, string, number, string, boolean, symbol
2.Reference Data Type - Arrays, Objects
*/

var a, b, c;
a = 10
b = 30
if (a > b) {
    console.log("A is greater than B")
} else {
    console.log("B is greater than A")
}
var name = "Praveen"
var name2 = "Home"
var num = 121
var num1 = 121.5

console.log(name)
console.log(num * num1)

var marks = {
    Java: 44,
    Cloud: 40,
    BigData: 42.25
}
console.log(marks)
    //Booleans
var d = true;
var e = false
console.log(d, e)

//undefine and null
var u;
var n = null
console.log(n, u)

// Arrays
var arr = [1, 2, "prts", 4, 5]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

// operators in javascript

var m1 = 50
var m2 = 25
console.log("the value of a + b is", m1 + m2)
console.log("the value of a + b is", m1 - m2)
console.log("the value of a + b is", m1 * m2)
console.log("the value of a + b is", m1 / m2)
m1 -= 2
console.log(m1)
console.log(m1 == m2)

// logical operators

console.log(true && true)
console.log(true && false)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || false)

console.log(!true)
console.log(!false)

//Function in JavaScript
// DRY = Don't Repeat Yourself...
function avg(a, b) {
    return (a + b) / 2;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

//   Conditionals in JavaScript

var age = 35;
if (age > 8) {
    console.log("you are not a kid");
} else {
    console.log("you are a kid");
}



var age1 = 45;
// if-else ladder

if (age1 > 8) {
    console.log("you are not a kid");
} else if (age1 > 28) {
    console.log("you are young");
} else {
    console.log("you are a kid");
}

// for loop
var arr1 = [1, 2, 3, 4, 5, 7, 8];
for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}


arr1.forEach(function(element) {
    console.log(element);

})

let j = 0;
const ac = 0;

while (j < arr1.length) {
    console.log(j);
    j++
}
let j1 = 0;
do {
    console.log(arr1[j1])
    j1++;
} while (j1 < arr1.length);


for (i = 0; i < arr1.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arr1[i]);
}

// Array methods
let myarr = [1, 2, 'pra', null, true]
console.log(myarr.length);
myarr.push("Praveen");
console.log(myarr)
myarr.pop();
console.log(myarr)
myarr.shift();
console.log(myarr)
myarr.unshift("1");
console.log(myarr)


var pr3 = [1, 2, 42, 12, 36, 4, 95, 48, 34, 75];
console.log(pr3);
//its not working you have to find out about sort() method
pr3.sort();

let str = 'Praveen is doing well in order to achieve his success';
console.log(str.length);
console.log(str.indexOf('achieve'));
console.log(str.lastIndexOf('h'));
console.log(str.slice(1, 10));
str = str.replace("Praveen", "PRAVEEN") // to Replace first occurance on string in given string
console.log(str)


//JavaScript Date Concept

let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getMinutes());
console.log(myDate.getHours());
console.log(myDate.getMonth());


//DOM Manipulation
document.location

document.getElementById('btn').click()

document.getElementById('btn').click()