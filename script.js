// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var promptOne = prompt("How many characters would you like password to be?");
  if (promptOne < 8 || promptOne > 128) {
    alert('Invalid length. Must be between 8 and 128 characters.');
  }

  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);