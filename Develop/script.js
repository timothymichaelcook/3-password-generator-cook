//DECLARING ALL VARIABLES
var characterLength = 0;
var choiceArray = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "[", "]", "{", "}", "|", "?", "/", "<", ">"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

//Generating Button
var generateBtn = document.querySelector("#generate");

//Add Event Listen FOR BUTTON
generateBtn.addEventListener("click", writePassword);

// GENERATES PROMPTS
function generatePrompts(){
  choiceArray = choiceArray.concat(lowerCaseArray);

  characterLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 -128 digits. Please try again.");
    return false;
  }
  alert("Lowercase characters are required. Uppercase characters, special characters and numbers are optional");
  if(confirm("Would you like uppercase letters in your password?")) {
    choiceArray = choiceArray.concat(upperCaseArray);
  }
  if(confirm("Would you like special characters in your password?")) {
    choiceArray = choiceArray.concat(specialCharacterArray);
  }
  if(confirm("Would you like numbers in your password?")) {
    choiceArray = choiceArray.concat(numberArray);
  }
  return true;
}
//Generate Password
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}

// Writes password to the #password input
function writePassword() {
  var correctPrompts = generatePrompts();
  
  if (correctPrompts) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }
  
}

