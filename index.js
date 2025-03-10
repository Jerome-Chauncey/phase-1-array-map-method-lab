const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Plan: use the map() mathod to create a new array of transformed strings
//for each tutorial title: split it into words, Capitalize the first letter of each word
//Join the words back together
//Return the new array


function titleCased() {
  return tutorials.map(function (tutorial) { //loops through each tutorial title
    return tutorial
      .split(" ") // converts the title into an array of words.
      .map(function (word) { //loops through each word
        return word.charAt(0).toUpperCase() + word.slice(1); //Capitalizes the first letter & Keeps the rest of the word unchanged
      }) 
      .join(" "); // Join words back into a sentence
  });
}

console.log(titleCased());






// const titleCased = () => {
//   return tutorials
// }
