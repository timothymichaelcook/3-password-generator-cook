var characterLength = 8;
var choiceArray = [];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")",];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
// Selecting elements with the generate ID
var generateBtn = document.querySelector("#generate");

// Add Event Listener to Generate Button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var completeInput = userInput();
  var passwordText = document.querySelector("password");
  if (completeInput) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } 
  else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var generatedPassword = Math.floor(Math.random() * choiceArray.length);
    password = password + choiceArray[generatedPassword];
  }
  return password;
}

function userInput() {
  //Resets Array 
  choiceArray = [];

  characterLength = parseInt(prompt("Please type your password length? (8 - 128 characters)"))

  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please choose a password length between 8 -128 characters.");
    return false;
  }
  if(confirm("Would you like your password to include lowercase characters?")) {
    choiceArray = choiceArray.concat(lowercaseArray);
  }
  if(confirm("Would you like your password to include lowercase characters?")) {
    choiceArray = passwordCchoiceArrayharactersArray.concat(uppercaserray);
  }
  if(confirm("Would you like your password to include special characters?")) {
    choiceArray = choiceArray.concat(specialArray);
  }
  if(confirm("Would you like your password to include numbers?")) {
    choiceArray = choiceArray.concat(numbersArray);
  }
  return true;
}






