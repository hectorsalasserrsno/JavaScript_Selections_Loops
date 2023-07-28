console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(numbers = 99; numbers >= 0; numbers--){
if(numbers % 2 == 0){
    console.log(numbers);
}

}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(numbers = 99; numbers >= 0; numbers--){
    
    if(numbers % 3 == 0 && numbers % 5 == 0){
        console.log("FIZZ BUZZ");
    }
    else if (numbers % 3 == 0){
        console.log("FIZZ");
    }
    else if(numbers % 5 == 0){
        console.log("BUZZ");
    }

}

// Exercise 3 section
console.log("Exercise 3:\n===============\n")
let number = 1;
while(number <= 100){
   if(number % 2 === 0){
       console.log(number);
   }
   number++;
}
let number1 = 1
while(number1 <= 100){
    if(number1 % 3 === 0 && number1 % 5 === 0){
        console.log("FIZZ BUZZ");
    }
    else if(number1 % 3 === 0){
        console.log("FIZZ");
    }
    else if(number1 % 5 === 0){
        console.log("BUZZ");
    }
    number1++;   
}
// Exercise 4 section
console.log("Exercise 4:\n===============\n")
let value = Math.round((Math.random() * 500));
let n = Math.round(Math.random() * (500 - 100) + 100);



for(let i = 1; i <= n; i++){
    if ( i == value){
    console.log("found value!");
    break;
    }
    if(i == n){
console.log("Did not find value");
    }
}

// Exercise 5 section
console.log("Exercise 5:\n===============\n")

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let number3 = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for(let  i = start; i <= number3; i ++){
let output = "";
    if (i % fizzDivisor === 0){
        output += "FIZZ";
    }
    if (i % buzzDivisor === 0){
        output += "BUZZ";

    }
    console.log(`${i} ${output}`);

}