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

// function that starts when the button is pressed
function generatePassword() { // prompt to determine password length
  var length = prompt("How long do you want your password to be? it must be between 8 and 128 characters.");
 
 
  // ensures the user picked an appropriate number
  if (length !== null && length !== "" && length > 7 && length < 129) {

    console.log(length)
    // prompt to determine the type of characters the user wants in the password
    var lowerCase = confirm("Do you want to add lower case letters?");
    // populates the array with the desired characters
    if (lowerCase == true) {
      var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    }
    // creates an empty array
    else {
      var lowerCaseArray = [];
    }
    console.log(lowerCaseArray)
    console.log(lowerCase)

    // prompt to determine the type of characters the user wants in the password
    var upperCase = confirm("Do you want to add upper case letters?");
    // populates the array with the desired characters
    if (upperCase == true) {
      var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    }
    // creates an empty array
    else {
      var upperCaseArray = [];
    }

    // prompt to determine the type of characters the user wants in the password
    var numeric = confirm("Do you want to add numeric characters?");
    // populates the array with the desired characters
    if (numeric == true) {
      var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
    // creates an empty array
    else {
      var numericArray = [];
    }

    // prompt to determine the type of characters the user wants in the password
    var special = confirm("Do you want to add special characters?");
    // populates the array with the desired characters
    if (special == true) {
      var specialArray = ["+", "-", "&", "!", "^", "~", "*", "?", "#", "$", "%", "&", "(", ")", ":", ";", "<", ">", "@"];
    }
    // creates an empty array
    else {
      var specialArray = [];
    }
    console.log(special);
    console.log(upperCase);
    console.log(lowerCase);
    console.log(numeric);
 
    // checks that the user made at least one selection
    if (special == false && upperCase == false && lowerCase == false && numeric == false) {
      alert("You must include at least one option.")
    }
    
    // this combines all the selected arrays
    
    else{
      var passwordOptions = lowerCaseArray.concat(upperCaseArray, numericArray, specialArray); }

   

      var passwordCharacters = []
      // generates random characters from the concat array
      for (let i = 0; i < length; i++) {
        const individualCharacter = passwordOptions[Math.floor(Math.random() * passwordOptions.length)]
        // combines these characters into the password
        passwordCharacters.push(individualCharacter)
        // displays the password 
        document.getElementById("password").innerHTML = passwordCharacters.join('');
      }
    
  }
    // alert if the user picks an invalid number
  } else {
    alert("This is not a valid number.")
  }


//   // ask the user how long they want the password
//   // ask the user if they want lowercase letters
//   // add lowercase letters to the "potential characters array"
//   // repeat for uppercase, numbers, and special characters
//   // randomly select x amount of characters out of the "potential characters array"
//   // return this random selection




// // var passwordLength=parseInt(prompt("How many characters do you want the password to be? Password must have minimum 8 characters or maximum 128 characters."));
// //     while(passwordLength < 8 || passwordLength > 128 || typeof(passwordLength) != "number" || passwordLength === NaN || passwordLength === null) {
// //         alert("Please choose a number that is more than 8 and less than 128 characters");
// //         passwordLength=parseInt(prompt("How many characters do you want the password to be? The password cannot be less than 8 or more than 128 characters.");
// //     } 
// // var confirmation = confirm("Do you want to generate a password?")
// // if(confirmation)
// // {
// //   alert("Okay lets get started!")
// //   var password = prompt("How many characters do you want your Pass word to have")


// // }else{
// //   alert("Alright then have a good day!")
// // }
