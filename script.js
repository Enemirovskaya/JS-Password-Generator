// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialChar = [
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "[",
  "]",
  "^",
  "_",
  "{",
  "}",
  "|",
  "~",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
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

function generatePassword() {
  // THEN I am presented with a series of prompts/confirms for password criteria
  // WHEN prompted for password criteria
  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters

  // Array of options for computer to pick from
  var passwordLength = 8;
  var choiceMade = [];
  var userPasswordLength = window.prompt(
    "How many characters would you like your password contain?"
  );

  if (userPasswordLength < 8 || userPasswordLength > 128) {
    window.alert("Choose a number between 8 and 128.");
    return null;
  }

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var specialCharacterChoice = window.confirm(
    "Would you like special characters?"
  );
  console.log(specialCharacterChoice);
  if (specialCharacterChoice == true) {
    choiceMade = choiceMade.concat(specialChar);
    console.log(choiceMade);
  }

  var numbersChoice = window.confirm("Would you like numbers?");
  if (numbersChoice == true){
    choiceMade = choiceMade.concat(numbers);
    console.log(choiceMade);
  }

  var lowerCaseChoice = window.confirm("Would you like lower case characters?");
  if (lowerCaseChoice == true) {
    choiceMade = choiceMade.concat(lowerCase);
    console.log(choiceMade);
  }

  var upperCaseChoice = window.confirm("Would you like upper case characters?");
  if (upperCaseChoice == true) {
    choiceMade = choiceMade.concat(upperCase);
  }


  for (i = 0; i < userPasswordLength; i++) {
    var randomChoice = Math.floor(Math.random() * choiceMade.length);
    password = password + choiceMade[randomChoice];
  }
  
  // var computerChoice = SpecialChar[index];

  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  console.log(
    specialCharacterChoice,
    numbersChoice,
    lowerCaseChoice,
    upperCaseChoice
  );

  if (
    !specialCharacterChoice &&
    !numbersChoice &&
    !lowerCaseChoice &&
    !upperCaseChoice
  ) {
    window.alert("Please choose at leat one caracter option.");
    return null;
  }
  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  return password;

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
