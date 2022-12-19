// Declare Variables
var choiceArray = [];
var characterLength = 8;
var lowercaseArray = [];
var uppercaseArray = [];
var specialArray = [];
var numbersArray = [];

const lettersLower = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
  return caps.concat();
})();

const lettersUpper = (() => {
  const caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat();
})();

const lettersSpecial = (() => {
  const caps = [...Array(15)].map((val, i) => String.fromCharCode(i + 33));
  return caps.concat();
})();

const numbers = (() => {
  const caps = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  return caps.concat();
})();

lowercaseArray = lettersLower;
uppercaseArray = lettersUpper;
specialArray = lettersSpecial;
numbersArray = numbers;

// Test
// console.log(lowercaseArray);


// Select generate button with id generate
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
// MAIN FUNCTION THAT IS UPDATING THE DOM
function writePassword() {
  var correctInput = userInput();

  if(correctInput) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Loop that generates a password based on user inputs
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var generatedPassword = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[generatedPassword];
  }
  return password;
}

// Function that gets user input
function userInput() {
  //Resets Array 
  choiceArray = [];

  characterLength = parseInt(prompt("Please type your password length? (8 - 128 characters)"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Please choose a password length between 8 -128 characters.");
    return false;
  }
  if(confirm("Would you like your password to include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowercaseArray);
  }
  if(confirm("Would you like your password to include lowercase characters?")) {
    choiceArray = choiceArray.concat(uppercaseArray);
  }
  if(confirm("Would you like your password to include special characters?")) {
    choiceArray = choiceArray.concat(specialArray);
  }
  if(confirm("Would you like your password to include numbers?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
  return true;
}