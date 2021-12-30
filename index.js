// let name = prompt('Your name?', " ");
// let age = prompt('How old are you?', 100);

// alert(`Welcome ${name}, You are ${age} years old!`);

/** 
function multiplyMe(a, b) {
let newValue = (a**b);
return newValue;
}
multiplyMe(4, 2);

let myQuestion = confirm ("is the question correct?");
alert ("Thank you for your honest reply"); */

//conditional modal

// let conf = confirm("You must be at least 18 years old to view this content.");
// let userName = prompt("What's your name?");
// let userAge = prompt("What's your age?");

// if (userAge >= 18) {
//   alert("Welcome! " + userName);
// } else {
//   alert("Sorry, you must be at least 18 years old to view this content.");
// }

// Arithmetic Operations

// let a = 3;
// let x = (100 + 50) * a;
// document.getElementById("demo").innerHTML = x;


//weather conditions

/** const select = document.getElementById('weather');
const para = document.getElementById('comment');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = ' ';
  }
}

// Dark mode

// const select = document.getElementById('theme');
// const html = document.querySelector('html');
// document.body.style.padding = '10px';

// function update(bgColor, textColor) {
//   html.style.backgroundColor = bgColor;
//   html.style.color = textColor;
// }

// select.addEventListener('change', () => (select.value === 'black') ? update('black', 'white'): update('white', 'black'));

// // Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
// const day = new Date().getDay();

// switch (day) {
//   case 0:
//     return "It's Sunday, time to relax!";
//       break;
//       case 1:
//         return "Happy Monday!";
//         break;
//       case 2:
//         return "It's Tuesday. You got this!";
//         break;
//       case 3:
//         return "Hump day already!";
//         break;
//       case 4:
//         return "Just one more day 'til the weekend!";
//         break;
//       case 5:
//         return "Happy Friday!";
//         break;
//       case 6:
//         return "Have a wonderful Saturday!";
//         break;
//       default:
//         return "Something went horribly wrong...";
//       }


// Function declaration

// const ask = function(question, yes, no){
//   if(confirm(question)){
//     return yes()
//   } else{
//     return no()
//   }
// }
// function showOk(){
//   alert("You agreed.")
// }
// function showCancel(){
//   alert("You aborted the process.");
// }

// ask("Will Nigeria be better?", showOk, showCancel);

// let sum = (x, y) => x + y;

// alert(sum(1, 2));


// Arrow Function

let ask = (question, yes, no) => confirm(question) ? alert(yes) : alert(no);
ask("Do you agree?", "You agreed.", "You canceled the execution.");

// Practice Questions
/** Write a function called add7 that takes one number and returns that number + 7.
 * 
Write a function called multiply that takes 2 numbers and returns their product.

Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.

Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d" */

// add values

//  function add7(a){
//    return a +7;
//  }
//  add7(9)

// // multiply values

//  function multiply(a,b){
//    let result = a*b;
//    return result
//  }
//  multiply(9,8);

// // capitalize string

//  function capitalize(word){
//   //  return word.toUpperCase(0);
//    return word.charAt(0).toUpperCase()+word.slice(1);
//  }
//  capitalize("taofeek");

// // find last letter

//  function lastLetter(word){
//   let result = word.charAt(word.length-1);
//   return result;
// }
// lastLetter("taofeek");

// // Fizzbuzz

// let userInput = parseInt(prompt("Please enter the number you'd like to FizzBuzz up to: "));

// for (let i = 1; i <= userInput; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// // Coderbyte challenge

// // First Factorial
// // Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

// function FirstFactorial(num) { 
//   let result = 1;
//     // code goes here  
//     for(let i =1; i<= num; i++){
//     result *= i;
//     }
//     return result
//   } */

  // Number Guessing from MDN

  let randomNumber = Math.floor(Math.random()) + 1;

  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lowOrHi = document.querySelector('lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');

  let guessCount = 1;
  let resetButton;

  function checkGuess() {

    const userGuess = Number(guessField.value);
    if(guessCount === 1) {
      guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber) {
      lastResult.textContent = 'Congratulations! You got it right!';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      setGameOver();
    } else if(guessCount === 10) {
      lastResult.textContent = '!!!GAME OVER!!!';
      setGameOver();
    } else {
      lastResult.textContent = 'Wrong!';
      lastResult.style.backgroundColor = 'red';
      if(userGuess < randomNumber) {
        lowOrHi.textContent = 'Last guess was too low!';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = 'Last guess was too high!';
      }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();
  }
  guessSubmit.addEventListener('click', checkGuess);

  function setGameOver() {
	  guessField.disabled = true;
	  guessSubmit.disabled = true;
	  resetButton = document.createElement('button');
	  resetButton.textContent = 'Start new game';
	  document.body.appendChild(resetButton);
	  resetButton.addeventListener('click', resetGame);
  }

  function resetGame() {
	  guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for (const resetPara of resetParas) {
      resetPara.textContent = '';
    }
	  resetButton.parentNode.removeChild(resetButton);

	  guessField.disabled = false;
	  guessSubmit.disabled = false;
	  guessField.value = '';
	  guessField.focus();

	  lastResult.style.backgroundColor = 'white';

	  randomNumber = Math.floor(Math.random()) + 1;
  }