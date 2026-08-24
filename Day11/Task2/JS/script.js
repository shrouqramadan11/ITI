let userName = "Shrouq";              // String
let age = 20;                         // Number
let isStudent = true;                 // Boolean
let x;                                // Undefined
let y = null;                         // Null
let user = { name: "Shrouq" };        // Object
let id = Symbol("id");                // Symbol
let bigNumber = 12345678901234567890n; // BigInt


// Grade checker
let grade = 85;

if (grade >= 90) {
    console.log("Excellent");
}
else if (grade >= 80) {
    console.log("Good");
}
else if (grade >= 70) {
    console.log("Average");
}
else if (grade >= 60) {
    console.log("Pass");
}
else {
    console.log("Fail");
}