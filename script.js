// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var promptLength = prompt("Enter your desired password character length.");
   if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
     alert("Invalid entry. You must select a number between 8 and 128.");
   } else {
     alert(`Your password will be ${promptLength} characters long.`);
     confirmLower();
   }

  function confirmLower() {
    console.log("confirm message");
  }
  }


  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//  // var promptLength = prompt("How many characters would you like password to be?");
//   // if (promptLength < 8 || promptLength > 128) {
//   //   alert("Invalid length. Must be between 8 and 128 characters.");
//   // } else {
//   //   confirmLower();
//   // }

//   // function confirmLower() {
//   //   var confirmAnswer = confirm("Allow both lower and uppercase letters in password?");
//   // }




