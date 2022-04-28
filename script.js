// Generator character arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specialCh = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Button//
var generateBtn = document.querySelector("#generate");

//Function & if statements to generate password//
function generatePassword() {
    var length = prompt("Enter Number of characters between 8-128.");
    console.log (length);
    var finalPassword = ""
    
    if (length < 8 || length > 128) {
      alert("Choose a number between 8 and 128");
      return (" ")
    }
  
    if(isNaN(length)){
      alert("Choose a number between 8 and 128 then click the generate password button.");
      return (" ")
    }

    //Variables to confirm characters//
    var isLowercase = confirm("Do you want to use lower case letters? Click 'OK' for Yes and 'Cancel' for No.");
    var isUppercase = confirm("Do you want to use upper case letters? Click 'OK' for Yes and 'Cancel' for No.");
    var isANumber = confirm("Do you want to use a number? Click 'OK' for Yes and 'Cancel for No.");
    var isSpecialChar = confirm("Do you want to use a special character? Click 'OK' for Yes and 'Cancel' for No.");

    //Empty array for all usableChars concatinated//
    var usableChars = []

    