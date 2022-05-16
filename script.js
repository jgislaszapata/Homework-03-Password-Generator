// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var promptLength = prompt("Enter your desired password length.");
    if (promptLength < 8 || promptLength > 128 || isNaN(promptLength)) {
        alert("Invalid entry. Please enter a number between 8 and 128.");
        return; 
    }
    console.log(promptLength);

    var listChar = '';
    var pass = '';
    var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
    var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numChar = '1234567890';
    var specialChar = `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`;

    var confirmLower = confirm('Would you like your password to include lowercase letters?');
    if (confirmLower === true) {
      listChar += lowerChar;
    }
    console.log(confirmLower);
    console.log(listChar);

    var confirmUpper = confirm('Would you like your password to include uppercase letters?');
    if (confirmUpper === true) {
      listChar += upperChar;
    }
    console.log(confirmUpper);
    console.log(listChar);

    var confirmNum = confirm('Would you like your password to include numbers?');
    if (confirmNum === true) {
      listChar += numChar; 
    }
    console.log(confirmNum);
    console.log(listChar);

    var confirmSpecial = confirm('Would you like your password to include special characters?');
    if (confirmSpecial === true) {
      listChar += specialChar;
    }
    console.log(confirmSpecial);
    console.log(listChar);

    for (var i = 0; i<promptLength; i++) {
      var index = Math.floor(Math.random() * listChar.length);
      pass += listChar.substring(index, index+1);
    }
    console.log(pass);
    alert("Your randomly generated password is: " + pass)
    
    
    
    
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



