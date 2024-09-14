//------------------------------------------------PART 1------------------------------------
//Loop through all numbers from 1 to 100.
for (let a = 1; a <= 100; a++) {
   console.log (a);
} 


//If a number is divisible by 3, log “Fizz.”
for (let b = 1; b <= 100; b++) {
    if (b % 3 === 0) {
        console.log ("Fizz");
    }  else{
        console.log(b);
    }
}


// If a number is divisible by 5, log “Buzz.”

for (let c = 1; c <= 100; c++) {
    if (c % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(c);
    }
}


//If a number is divisible by both 3 and 5, log “Fizz Buzz.”
for (let d = 1; d <= 100; d++) {
    if (d % 3 === 0 && d % 5 === 0) {
        console.log("Fizz Buzz");
    } else {
        console.log(d);
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

//------------------------------------------------PART 2------------------------------------

let n = 0; 
let numberofPrimestofind = 10; 
let primesFound = 0; 

while (primesFound < numberofPrimestofind) {
  let prime = true;

  if (n <= 1) {
    prime = false;
  } else {
    for (let f = 2; f < n; f++) { // check numbers less then n
      if (n % f === 0) { 
        prime = false;
        break;
        
      }
    }
  }

  if (prime) {
    console.log(n,"prime"); 
    primesFound++; 

  }

  n++; 
}


//------------------------------------------------PART 3------------------------------------

//ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

const data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const row = data.split('\n');
for (let q = 0; q < row.length; q++) {
    const cell = row[q].split(',');
    console.log(cell[0], cell[1], cell[2], cell[3]);
}

//Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232
const data2 = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
const row2 = data2.split('\n');
for (let z = 0; z < row2.length; z++) {
    const cell2 = row2[z].split(',');
    console.log(cell2[0], cell2[1], cell2[2], cell2[3]);
}