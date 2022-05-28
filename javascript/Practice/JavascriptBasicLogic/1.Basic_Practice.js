//www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

//1. Write a JavaScript program to display the current day and time in the following format
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

https: function showCurrentDateTime() {
  const dayArrray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date();
  const currentday = date.getDay();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log("Today is :" + dayArrray[currentday]);
  console.log("Current Time is :" + hour + "PM:" + minutes + ":" + seconds);
}
showCurrentDateTime();

//  Write a JavaScript program to print the contents of the current window.
// window.print();

//  Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
function currentDate() {
  const d = new Date();
  console.log(d.getMonth() + "-" + d.getDate() + "-" + d.getUTCFullYear());
}
currentDate();

// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function checkLeapYear(year) {
  if (year % 4 === 0) {
    console.log("Leap year :" + year);
  }
}
checkLeapYear(2024);
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front. 
function rotate(str){
    
    str.split('');
   const arr=[];
    for (let index = str.length; index = 0; index--) {
        console.log("for loop")
       arr[i].push=str;
       console.log(arr[i])
        
    }
}
rotate("w3 resource");

// Write a JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
console.log("--------------------");
for (var year = 2014; year <= 2050; year++) {
  var d = new Date(year, 0, 1);
  console.log(d);
  if (d.getDay() === 0) console.log("1st January is being a Sunday  " + year);
}
console.log("--------------------");
let number= Math.random;
console.log(number);
// . Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
// function numberMatch(guessNumber){
//   let number = Math.floor(Math.random() * 10);
//   console.log(number);
//   if(number==guessNumber){
//     alert("Good Work!");
//   }
//   alert("Not matched");
// }

// numberMatch(4);
  
console.log("------------------------------------------------------------");
  // Write a JavaScript program to calculate days left until next Christmas.
  function findChrismasDaysLeft(){
   let today = new Date();
   todayMilliSeconds= today.now();
   console.log(todayMilliSeconds);
  }

  console.log("------------------------------------------------------------");
  // Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
  function multiply(a,b){
    return a*b;
  }
  multiply(2,4);

    function divide(a, b) {
      return a/b;
    }
    divide(8, 4);

      console.log(
        "------------------------------------------------------------"
      );
// 11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
function converToC(f){
  c = 5*(f-32)/9;
  return c;
  }

function converToF(c){
f = (9 * c) / (5 + 32);
return f;
}
converToF(60);
converToC(45);

//  Write a JavaScript program to get the website URL (loading page).
// console.log(document.URL);

// Write a JavaScript exercise to get the extension of a filename.
systemFile="try.css"
// split the string using .(dot) separator
extensionSplit=systemFile.split('.');
console.log(extensionSplit);
// Return the last element removed, here last element is css
extensionClean = extensionSplit.pop();
console.log(extensionClean);

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum. 
function sum (a,b){
 add =a+b;
 if(a==b) add=3*(a+b);
 console.log(add);
}
sum(3, 4);
sum(4, 4);


      console.log(
        "------------------------------------------------------------"
      );
      // Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50. 
      function checkTwoNumbers(a,b){
        if((a==50) ||(b==50) ||(a+b==50)){
          console.log('true');} 
      }
      checkTwoNumbers(50,2);
      checkTwoNumbers(50, 50);
      checkTwoNumbers(40, 10);
      checkTwoNumbers(10, 2);

  console.log("------------------------------------------------------------");
      // Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original
      function addPy(string){
        
        if(string.indexOf('py')>-1){
          console.log(string);
        }
        else{
         console.log(string = "Py" + string); 
        }
      }

      addPy("charm");
      addPy("python");
        console.log(
          "------------------------------------------------------------"
        );
        // 22. Write a JavaScript program to remove a character at the specified position of a given string and return the new string. 
       const rawString="Rear is rear";
       console.log(rawString.replace("R", "") );
      console.log(rawString.substring(0, 8));
      console.log(rawString.charAt(3));

      // Check for ear is part of rawString variable or not
     console.log(rawString.includes("ear")); 

     console.log(rawString.slice(0, rawString.length-1));
    //  Removes first two character from String
     console.log(rawString.slice(2));

    //  23. Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1. 
    function first_last(str1) {
      if (str1.length <= 1) {
        return str1;
      }
      // returns substring starts from 2nd character to 2nd last character of string
      mid_char = str1.substring(1, str1.length - 1);
      console.log(mid_char);
      // concatenate last character substring + mode character + first character string
      return str1.charAt(str1.length - 1) + mid_char + str1.charAt(0);
    }
    console.log(first_last("a"));
    console.log(first_last("Kya bate kare"));
    console.log(first_last("abc"));
  console.log("------------------------------------------------------------");
    // Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more. 
     function first_last(str1) {
       if (str1.length <= 3) {
         return str1;
       }
       // returns substring starts from 2nd character to 2nd last character of string
       mid_char = str1.substring(3, str1.length - 3);
       console.log(mid_char);
       // concatenate last character substring + mode character + first character string
       return str1.charAt(str1.length - 3) + mid_char + str1.charAt(3);
     }

     console.log(first_last("Kya bate kare"));
     console.log(first_last("abc"));
console.log("------------------------------------------------------------");
    //  Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.  
    function checkstr(str){
     if(str.indexOf('Java') == 0) console.log("true");
     else console.log("false");
    }
checkstr('Jvascript');

console.log("------------------------------------------------------------");

// Write a JavaScript program to check whether a given number is presents in the range 40..10000.  

function checkNumber(n){
  if((n>40) || (n<10000)) 
  console.log("In Range");
  else
  console.log("Not in range");
}
console.log("------------------------------------------------------------");
checkNumber(1000);

// Write a JavaScript program to reverse a given string.
let str1 ="Ram is great"
console.log(str1.split("").reverse().join(""));

console.log("------------------------------------------------------------");
// 50. Write a JavaScript program to capitalize the first letter of each word of a given string.  Go to the editor
function capital_letter(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

console.log(
  capital_letter(
    "Write a JavaScript program to capitalize the first letter of each word of a given string."
  )
);