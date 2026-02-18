// ================= OBJECT LITERALS =================
const user = {
    name: "Sam",
    age: 27,
    isAdmin: false,
    address: {
        city: "Chennai",
        pincode: 600001
    },

    // Object method
    greet() {
        return "Hello " + this.name;
    }
};

console.log("Name:", user.name);
console.log("Age:", user["age"]);
console.log("City:", user.address.city);
console.log(user.greet());

// Add / Modify
user.city = "Chennai";
user.age = 29;

// Delete property
delete user.isAdmin;


// ================= DESTRUCTURING =================
const { name, age } = user;
console.log("Destructured:", name, age);

// Rename while destructuring
const { name: username } = user;
console.log("Renamed:", username);

// Default value
const { role = "user" } = user;
console.log("Default role:", role);

// Nested destructuring
const { address: { city } } = user;
console.log("Nested city:", city);


// ================= ARRAY DESTRUCTURING =================
const arr = [10, 20, 30];

const [a, b] = arr;
console.log("Array destructuring:", a, b);

const [first, , third] = arr;
console.log("Skip value:", first, third);


// ================= ARRAY METHODS =================
const numbers = [1, 2, 3, 4];

// map()
const doubled = numbers.map(num => num * 2);
console.log("Map doubled:", doubled);

// filter()
const even = numbers.filter(num => num % 2 === 0);
console.log("Filter even:", even);

// reduce()
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Reduce sum:", sum);

// forEach()
console.log("forEach output:");
numbers.forEach(num => console.log(num));

// find()
const users = [{ id: 1 }, { id: 2 }];
const foundUser = users.find(u => u.id === 2);
console.log("Find user:", foundUser);

// some()
console.log("Some > 3:", numbers.some(num => num > 3));

// every()
console.log("Every > 0:", numbers.every(num => num > 0));


// ================= SORTING =================
const nums = [10, 5, 20];

// Wrong default sort
console.log("Default sort:", nums.sort());

// Correct numeric ascending
console.log("Ascending sort:", nums.sort((a, b) => a - b));

// Descending
console.log("Descending sort:", nums.sort((a, b) => b - a));

// Sorting objects
const people = [
    { name: "Sam", age: 25 },
    { name: "John", age: 30 }
];

people.sort((a, b) => a.age - b.age);
console.log("Sorted people by age:", people);


// ================= REAL-LIKE EXAMPLES =================

// Cart total using reduce
const cart = [
    { price: 100 },
    { price: 200 },
    { price: 300 }
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log("Total cart price:", totalPrice);

// Extract emails using map
const userList = [
    { email: "a@mail.com" },
    { email: "b@mail.com" }
];

const emails = userList.map(u => u.email);
console.log("Emails:", emails);

// Filter expensive products
const products = [
    { name: "Phone", price: 15000 },
    { name: "Pen", price: 50 }
];

const costly = products.filter(p => p.price > 1000);
console.log("Costly products:", costly);
