// Create a variable via a ternary operator that assigns a string based on an expression.

// Expression
const isSunny = true;
// Ternary Operator
const weather = isSunny ? "It's sunny outside!" : "It's not sunny outside!";
console.log(weather); // Output: It's sunny outside!



// Create an object and loop through its properties, console logging each properties’ value

const myObject = {
    Name: "Daniella",
    Age: 21,
    Location: "New York"
  };
  
  // Loop through the properties of the object
  for (const property in myObject) {
    // Check if the property exists directly on the object (not inherited)
    if (myObject.hasOwnProperty(property)) {
      // Log the property's value
      console.log(`${property}: ${myObject[property]}`);
    }
  }
  

// Create an array of numbers. Using the map function, create a second array of those
// numbers squared.

const numbers = [1, 2, 5, 6, 7];

const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]



