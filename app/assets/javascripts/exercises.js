// // Exercise #1:

// Do the NASA countdown through the console. That is, the console should say:

// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLASTOFF!

// Hint: Use a for loop!

// for(var i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("BLASTOFF!")

// // Exercise #2:

// var numbers = [5, 23, 98, 234, 1, 0, 3, 177];

// Write some code that prints all the numbers in the 'numbers' array to the console.

// Hint: Use a for loop!

// for(var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// // Exercise #3:

// Write code that finds the average of all the numbers in the 'numbers' array.
// Hint: Use a for loop!

// var total = 0;
// for(var i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }
// var average = total / (numbers.length);
// console.log(total);
// console.log(numbers.length);
// console.log(average);

// // Exercise #4:

// Implement FizzBuzz in JavaScript. Write a program that prints the integers from 1 to 100.
// But for multiples of three print "Fizz" instead of the number, and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".

// Hint: See other hints!

// for(var i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// // Exercise #5:

// Recreate the guess a number game between 1 and 100. That is, the computer chooses a random number between 1 and 100, and tells the user to pick higher or lower. The user has 10 tries. Use the prompt function to help you with this. (NOTE: prompt will return a string, and you may need to "cast" it into a number.)
// For exaple:
// var guess = prompt("Guess a number");

// var randomNumber = Math.floor((Math.random() * 100) + 1);

// for(var guess = 1; guess <= 10; guess++) {
//   var userGuess = prompt('Guess a number between 1 and 100:');
//   if (parseInt(userGuess) === randomNumber) {
//     console.log('You guessed correctly!');
//     break;
//   } else if (userGuess > randomNumber) {
//     console.log('Your guess is too high; please guess again.');
//   } else if (userGuess < randomNumber) {
//     console.log('Your guess is too low; please guess again.');
//   } else {
//     console.log('Please choose a number.');
//   } 
// }
// console.log('The correct answer was: ' + randomNumber + '. Thanks for playing.');

// // Exercise #6:

// Create a function that accepts two numbers as parameters and returns their sum.

// function addTwoNumbers(numberOne, numberTwo) {
//   return numberOne + numberTwo;
// }

// console.log(addTwoNumbers(5, 33));

// // Exercise #7:

// Create a function that accepts an array as an argument and returns the average. (Basically the same as Exercise #3, but wrap that code in a function and demonstrate its usage.)

// function average(array) {
//   var total = 0;
//   for(var i = 0; i < array.length; i++) {
//     total = total + array[i];
//   }
//   return total / (array.length);
// }

// console.log(average(numbers));

// // Exercise #8:

// Create an object that represents a particular book, having attributes of title, author, isbn, pages, and year of publication.

// var book = {
//   title: 'Harry Potter: part 0',
//   author: 'JK Rowling',
//   isbn: '2342.343',
//   pages: '342',
//   publicationYear: '2015',
//   printMessage: function () {
//     console.log(this.title);
//     console.log(this.author);
//     console.log(this.isbn);
//     console.log(this.pages);
//     console.log(this.publicationYear);
//   }
// };

// console.log(book.title);
// console.log(book.author);
// console.log(book.isbn);
// console.log(book.pages);
// console.log(book.publicationYear);

// // Exercise #9:

// Add a function to the above book object that console.logs out all the above information 

// book.printMessage();

// // Extra exercises can be found here: http://www.ling.gu.se/~lager/teaching/dialogue_systems%20II/labs/javascript.html 


