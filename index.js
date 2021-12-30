let name = prompt('Your name?', " ");
let age = prompt('How old are you?', 100);

alert(`Welcome ${name}, You are ${age} years old!`);

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

const select = document.getElementById('weather');
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

 function add7(a){
   return a +7;
 }
 add7(9)

// multiply values

 function multiply(a,b){
   let result = a*b;
   return result
 }
 multiply(9,8);

// capitalize string

 function capitalize(word){
  //  return word.toUpperCase(0);
   return word.charAt(0).toUpperCase()+word.slice(1);
 }
 capitalize("taofeek");

// find last letter

 function lastLetter(word){
  let result = word.charAt(word.length-1);
  return result;
}
lastLetter("taofeek");

// Fizzbuzz

let userInput = parseInt(prompt("Please enter the number you'd like to FizzBuzz up to: "));

for (let i = 1; i <= userInput; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}