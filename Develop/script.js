//es Variabl
var characterLength = 16;
var choiceArray = [];

var specialCharacterArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPrompts (){

}

//generatePassword
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[randomIndex];
  }
  return password;
}