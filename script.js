// Generator character arrays
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCh = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//Button//
var generateBtn = document.querySelector("#generate");
var finalPassword = "";
//Function & if statements to generate password//
function generatePassword() {
  var length = prompt("Enter Number of characters between 8-128.");
  console.log(length);

  console.log("finalPassword", finalPassword);

  if (length < 8 || length > 128) {
    alert("Choose a number between 8 and 128");
  }

  if (isNaN(length)) {
    alert(
      "Choose a number between 8 and 128 then click the generate password button."
    );
  }

  //Variables to confirm characters//
  var isLowercase = confirm(
    "Do you want to use lower case letters? Click 'OK' for Yes and 'Cancel' for No."
  );
  var isUppercase = confirm(
    "Do you want to use upper case letters? Click 'OK' for Yes and 'Cancel' for No."
  );
  var isANumber = confirm(
    "Do you want to use a number? Click 'OK' for Yes and 'Cancel' for No."
  );
  var isSpecialChar = confirm(
    "Do you want to use a special character? Click 'OK' for Yes and 'Cancel' for No."
  );

  //Empty array for all usableChars concatinated below//
  var usableChars = [];

  if (isLowercase) {
    finalPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    console.log(finalPassword);
    usableChars = usableChars.concat(lowerCase);
  }

  if (isUppercase) {
    finalPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    console.log(finalPassword);
    usableChars = usableChars.concat(upperCase);
  }

  if (isANumber) {
    finalPassword += numbers[Math.floor(Math.random() * numbers.length)];
    console.log(finalPassword);
    usableChars = usableChars.concat(numbers);
  }

  if (isSpecialChar) {
    finalPassword += specialCh[Math.floor(Math.random() * specialCh.length)];
    console.log(finalPassword);
    usableChars = usableChars.concat(specialCh);
  }

  //Confirmation minimum 1 character chosen//
  if (!isLowercase && !isUppercase && !isANumber && !isSpecialChar) {
    alert(
      "Please choose at least one character option! Click GENERATE PASSWORD again."
    );
  }

  //for loop to get random elements from usableChars array//
  for (var i = finalPassword.length; i < length; i++) {
    finalPassword +=
      usableChars[Math.floor(Math.random() * usableChars.length)];
  }
  return finalPassword;
}

//Write password to the #password//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Event listener to generate button//
generateBtn.addEventListener("click", writePassword);
