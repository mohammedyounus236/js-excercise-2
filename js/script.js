/*
var x = 5; //creates global variable x with the value 5
console.log(x);
x += 1;
console.log(x);
x = x + 1;
console.log(x);
//3 ways to increment x
*/
/*
var y = 8;
y -= 1;
console.log(y);
y= y - 1;
console.log(y);
y--;
console.log(y);
//3 ways to decrement y
*/
/*
var z = 8;
z = z * 2;
console.log(z);
z *= 2;
console.log(z);
//2 ways to multiply by 2
*/
/*
var a = 8;
a = a / 2;
console.log(a);
a /= 2;
console.log(a);
//2 ways to divide by 2
*/
/*
var a = 8; 
a = a ** 3 ;
console.log(a);
*/
/*
var b = 17;
b = b % 2;
console.log(b);
//Modulus takes the value divides by the number and returns remainder
*/

function evenOrOdd(num){
	var tester = num % 2;
	if(tester === 0){
		console.log("Even");
	}
	else if(tester === 1){
		console.log("Odd");
	}
	else
		console.log("Error");
}

evenOrOdd(4);
evenOrOdd(5);
evenOrOdd("Lalalaala");