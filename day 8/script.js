// string, number, boolean, undefined, null

// let, const and var

console.log("Hello, World!");

let name = "Koustav";
console.log(typeof name);

let firstname = "John";
let lastname = "Doe";
console.log(firstname + " " + lastname);

let num = 20;
console.log(typeof num);

let num1 = 5.6;
console.log(typeof num1);

let bool = true;
console.log(typeof bool);

let num2 = 10;
let num3 = 30;
console.log(num2 + num3);

// equal, not equal, greater than, less than, greater than or equal to, less than or equal to

let num4 = 10;
let num5 = 20;
let num6 = "10";
console.log(num4 == num5);
console.log(num4 != num5);
console.log(num4 === num6);
console.log(num4 !== num6);
console.log(num4 > num5);
console.log(num4 < num5);
console.log(num4 >= num5);
console.log(num4 <= num5);

//if, else, else if

let age = 18;
if (num4 > num5) {
    console.log("num4 is greater than num5");
}
else {
    console.log("num4 is less than num5");
}

//////////////////////////////////////////

if (num4 > num5) {
    console.log("num4 is greater than num5");
}
else if (num4 < num5) {
    console.log("num4 is less than num5");
}
else {
    console.log("num4 is equal to num5");
}

// null and undefined

let num7;
console.log(num7);

let num8 = null;
console.log(num8);

let arr = [1, "Name", 3.6, true, false, null, undefined, [1, 2, 3]];
console.log(arr.length);

let lastindex = arr.length - 1;
console.log(lastindex);

arr.push(6);
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.length-1);

arr[3] = "New Value";
console.log(arr);

arr[1] = " My name is name";
console.log(arr);