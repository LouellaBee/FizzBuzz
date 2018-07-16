// practising 'if' statments and printing
/**
if (5 > 10) {
    console.log("5 is less than 10");
} else {
    console.log("5 is not greater than 10"); 
}
*/

//learning about variable creation
/**
let myName = 'Louella'; 
console.log(myName); 
*/

// Fizz Buzz 
for(let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
	console.log("FizzBuzz"); 
    } else if(i % 3 === 0) {
    	console.log("Fizz");
    } else if (i % 5 === 0) {
    	console.log("Buzz");
    } else {
    	console.log(i);
    }
}
