//Loop through all numbers from 1 to 100.
for (let a = 1; a <= 100; a++) {
   // console.log (a);
} 


//If a number is divisible by 3, log “Fizz.”
for (let b = 1; b <= 100; b++) {
    if (b % 3 === 0) {
     //   console.log ("Fizz");
    }  else{
     //   console.log(b);
    }
}


// If a number is divisible by 5, log “Buzz.”

for (let c = 1; c <= 100; c++) {
    if (c % 5 === 0) {
       // console.log("Buzz");
    } else {
       // console.log(c);
    }
}


//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
for (let d = 1; d <= 100; d++) {
    if (d % 3 === 0 && d % 5 === 0) {
       // console.log("Fizz Buzz");
    } else {
       // console.log(d);
    }
}

// If a number is not divisible by either 3 or 5, log the number.
for (let e = 1; e <= 100; e++) {
    if (e % 3 !== 0 && e % 5 !== 0) {
        console.log(e);
    } else {
        console.log("zzz")
    }
}