// Declare/Assign Variables
var generateBtn = document.querySelector("#generate")
var passwordLength;
var passwordCharactersArray = [];
var lowercaseCharactersArray = lettersLower;
var uppercaseCharactersArray = lettersUpper;
var specialCharactersArray = lettersSpecial;
var numbersArray = numbers;

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




// Test to see if arrays are generating the correct values
console.log(lowercaseCharactersArray);
console.log(uppercaseCharactersArray);
console.log(specialCharactersArray);
console.log(numbersArray);


// Declare/Assign Functions
function generatePassword() {

}


function userInput() {
  characterLength = parseInt(prompt("Please type your password length? (8 - 128 characters)"))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a number between 8 -128 characters");
    return false;
  }
}



// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);


// Write Password to the #password Input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("password");
  passwordText.value = password;
}





