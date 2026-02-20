/* ================= SECTION 1 — Variables & Assignment ================= */

// 1 & 2
let myName = "Saranya";
let myAge = 20;
let isStudent = true;

console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Is Student:", isStudent);

// 3. Swap without third variable
let a = 5, b = 10;
[a, b] = [b, a];
console.log("Swapped values -> a:", a, "b:", b);

// 4. What prints and why
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x); // 10 (x is unchanged)

// 5. Rewrite using const
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);


/* ================= SECTION 2 — Operators ================= */

// 6. Arithmetic operations
let num1 = 12, num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// 7. Predict output
console.log(5 + "5");   // "55"
console.log(5 - "2");   // 3
console.log(true + 1);  // 2

// 8. Compare with 100
let number = 120;

if (number > 100) console.log("Greater than 100");
else if (number === 100) console.log("Equal to 100");
else console.log("Less than 100");

// 9. == vs ===
console.log(5 == "5");   // true (value comparison)
console.log(5 === "5");  // false (value + type comparison)

// 10. Logical operators
let age = 25;

if (age >= 18 && age <= 60)
  console.log("Eligible");
else
  console.log("Not eligible");


/* ================= SECTION 3 — Control Statements ================= */

// 11. Even or Odd
let check = 7;

if (check % 2 === 0) console.log("Even");
else console.log("Odd");

// 12. FizzBuzz
let fb = 15;

if (fb % 3 === 0 && fb % 5 === 0) console.log("FizzBuzz");
else if (fb % 3 === 0) console.log("Fizz");
else if (fb % 5 === 0) console.log("Buzz");
else console.log(fb);

// 13. Switch weekday
let day = 3;

switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid day");
}

// 14. For loop
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
  console.log("Even:", i);
}

// 15. While loop sum 1 to N
let N = 5;
let sum = 0;
let i = 1;

while (i <= N) {
  sum += i;
  i++;
}

console.log("Sum from 1 to N:", sum);

// 16. Break & Continue
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 8) break;
  console.log(i);
}


/* ================= SECTION 4 — Functions ================= */

// 17. Function returning sum
function addNumbers(a, b) {
  return a + b;
}
console.log("Sum:", addNumbers(3, 4));

// 18. Arrow function
const addArrow = (a, b) => a + b;
console.log("Arrow Sum:", addArrow(5, 6));

// 19. Prime number check
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 7 prime?", isPrime(7));

// 20. Reverse string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("Reversed:", reverseString("hello"));

// 21. Output of test()
function test() {
  return;
  console.log("Hello");
}
test(); // Nothing prints

// 22. Largest number in array
function findLargest(arr) {
  return Math.max(...arr);
}
console.log("Largest:", findLargest([3, 9, 2, 15, 6]));


/* ================= SECTION 5 — Integrated Challenge ================= */

// 23. Grade calculator
function calculateGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "Fail";
}

let studentMarks = 82;
let grade = calculateGrade(studentMarks);

console.log("Student Marks:", studentMarks);
console.log("Final Grade:", grade);
