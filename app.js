console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

let maxNumber = 100
let currentNumber;

for (let i = 1; i <= maxNumber; i++) {
    if (i % 2 != 0){
        currentNumber = i;
        console.log(currentNumber);
    } 
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let fizzCount = 0;
let buzzCount = 0;
let fizzbuzzCount = 0;

for (let i = 3; i <= maxNumber; i++) {
    if (i % 3 == 0){
        element = i;
        console.log("FIZZ");
        fizzCount++;
    }
    if (i % 5 == 0){
        element = i;
        console.log("BUZZ");
        buzzCount++;
    }
    if (i % 3 == 0 && i % 5 == 0){
        element = i;
        console.log("FIZZBUZZ");
        fizzbuzzCount++;
    }
}

console.log(`Amount of FIZZ: ${fizzCount}`);
console.log(`Amount of BUZZ: ${buzzCount}`);
console.log(`Amount of FIZZBUZZ: ${fizzbuzzCount}`);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

console.log("While");
console.log("==================");
let i = 0;
while (i <= maxNumber) {
    if (i % 2 != 0){
        currentNumber = i;
        console.log(currentNumber);
    } 
    i++;
}

console.log("Do-While");
console.log("==================");

i = 0;
do{
    if (i % 2 != 0){
        currentNumber = i;
        console.log(currentNumber);
    } 
    i++;
}while (i <= maxNumber);

console.log("While");
console.log("==================");

i = 3;
fizzCount = 0;
buzzCount = 0;
fizzbuzzCount = 0;

while (i <= maxNumber) {
    if (i % 3 == 0){
        element = i;
        console.log("FIZZ");
        fizzCount++;
    }
    if (i % 5 == 0){
        element = i;
        console.log("BUZZ");
        buzzCount++;
    }
    if (i % 3 == 0 && i % 5 == 0){
        element = i;
        console.log("FIZZBUZZ");
        fizzbuzzCount++;
    }
    i++;
}
console.log(`Amount of FIZZ: ${fizzCount}`);
console.log(`Amount of BUZZ: ${buzzCount}`);
console.log(`Amount of FIZZBUZZ: ${fizzbuzzCount}`);

console.log("Do-While");
console.log("==================");

i = 3;
fizzCount = 0;
buzzCount = 0;
fizzbuzzCount = 0;

do{
    if (i % 3 == 0){
        element = i;
        console.log("FIZZ");
        fizzCount++;
    }
    if (i % 5 == 0){
        element = i;
        console.log("BUZZ");
        buzzCount++;
    }
    if (i % 3 == 0 && i % 5 == 0){
        element = i;
        console.log("FIZZBUZZ");
        fizzbuzzCount++;
    }
    i++;
}while (i <= maxNumber);

console.log(`Amount of FIZZ: ${fizzCount}`);
console.log(`Amount of BUZZ: ${buzzCount}`);
console.log(`Amount of FIZZBUZZ: ${fizzbuzzCount}`);



// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i == numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;
    }

    if (i == n)
    {
        console.log(`Did not find ${numberToFind} within 1-${n}`);
    }
    
}




