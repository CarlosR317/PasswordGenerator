// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  // ask the user how long they want the password
  // ask the user if they want lowercase letters
  // add lowercase letters to the "potential characters array"
  // repeat for uppercase, numbers, and special characters
  // randomly select x amount of characters out of the "potential characters array"
  // return this random selection
}
var password = generatePassword()
function generatePassword(); {
  String.fromCharCode(65)
}

function arrayFromLowToHigh(low, high) { 
  const array = [] 
  for (let i = low; i <=high; i++) {}


var passwordLength=parseInt(prompt("How many characters do you want the password to be? Password must have minimum 8 characters or maximum 128 characters."));
    while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
        alert("Please choose a number that is more than 8 and less than 128 characters");
        passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters.");
    } 
// var confirmation = confirm("Do you want to generate a password?")
// if(confirmation)
// {
//   alert("Okay lets get started!")
//   var password = prompt("How many characters do you want your Pass word to have")
  

// }else{
//   alert("Alright then have a good day!")
// }

