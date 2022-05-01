Random Password Generator

I created an application to generate random passwords with input from
users selections which included lowerCase, upperCase, numbers, and specialCharacters as options.

When the user clicks the Genereate Password button they are presented
with a series of choices including password length and types of characters they wish to use. Once the choices are selected the application determines if the criteria has been met.

When the character type windows open one by one the user selects either 'OK' for Yes or 'Cancel' for No for each. They must select 'OK' for at least one.

The array is accessed and concatinated into usableChars.
A for loop randomizes and selects characters from usablChars
if all criteria has been met, then a random "final password" is generated.

Lastly, the "write password" function recieves the results from "generate password" function and displays the results of the newly created random
password to the user.

The user can click on the "generate password" button again to start over
and create another random password as many times as they like.

User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

Deployed: https://smccarthy17.github.io/random-password-generator/

GitHub Repo: https://github.com/Smccarthy17/random-password-generator.git

Screenshot: <img src="images/password generator.png>
