// Declare/Assign Variables
var lettersLower = (() => {
  var caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 97));
  return caps.concat();
})();

var lettersUpper = (() => {
  var caps = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
  return caps.concat();
})();

var lettersSpecial = (() => {
  var caps = [...Array(15)].map((val, i) => String.fromCharCode(i + 33));
  return caps.concat();
})();

var numbers = (() => {
  var caps = [...Array(10)].map((val, i) => String.fromCharCode(i + 48));
  return caps.concat();
})();

var generateBtn = document.querySelector("#generate")
var passwordLength = 128;
var passwordCharactersArray = [];
var lowercaseCharactersArray = lettersLower;
var uppercaseCharactersArray = lettersUpper;
var specialCharactersArray = lettersSpecial;
var numbersArray = numbers;

// Test to see if arrays are generating the correct values
console.log(lowercaseCharactersArray);
console.log(uppercaseCharactersArray);
console.log(specialCharactersArray);
console.log(numbersArray);

// Declare/Assign Functions
function userInput() {
  //Resets Array 
  passwordCharactersArray = [];

  characterLength = parseInt(prompt("Please type your password length? (8 - 128 characters)"))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 -128 characters.");
    return false;
  }
  if(confirm("Would you like your password to include lowercase characters?")) {
    passwordCharactersArray = passwordCharactersArray.concat(lowercaseCharactersArray);
  }
  if(confirm("Would you like your password to include lowercase characters?")) {
    passwordCharactersArray = passwordCharactersArray.concat(uppercaseCharactersArray);
  }
  if(confirm("Would you like your password to include special characters?")) {
    passwordCharactersArray = passwordCharactersArray.concat(specialCharactersArray);
  }
  if(confirm("Would you like your password to include numbers?")) {
    passwordCharactersArray = passwordCharactersArray.concat(numbersArray);
  }
  return true;
}


function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength.length, i++) {
  
  }
}

// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);

// Write Password to the #password Input
function writePassword() {
  var completeInput = userInput();
  if (completeInput) {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
    passwordText.value = password;
  }
  
}





