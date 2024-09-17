// Adding a comment
console.log("I should go at the end")

// Compliments about "Your Name"
let compliments = [
    "Your Name is an absolute coding wizard!",
    "Your Name has the best problem-solving skills!",
    "Your Name is a natural leader and a fantastic teammate!",
    "Everyone looks up to Your Name's creativity!",
    "Your Name always brings positive energy to the group!"
];

// Log compliments one by one
console.log("Let's talk about how awesome 'Your Name' is:");
for (let i = 0; i < compliments.length; i++) {
    console.log(compliments[i]);
}

// Some additional variables to praise "Your Name"
let skill = "Your Name's attention to detail is second to none.";
let attitude = "Your Name never gives up, always striving for greatness.";
let teamwork = "Your Name knows how to work with others effortlessly.";

console.log(skill);
console.log(attitude);
console.log(teamwork);

// Now, let's create a ReferenceError intentionally
console.log(nonExistentVariable); // This will throw a ReferenceError since nonExistentVariable is not defined
