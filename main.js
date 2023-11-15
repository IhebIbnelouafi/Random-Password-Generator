const passwordBox = document.getElementById('password') ; 


const length = 14 ; 



const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
const lowerCase = "abcdefghijklmnopqrstuvwxyz" ;
const numbers = "0123456789" ;
const symboles ="&#{([-\^@)]_}%*!:<>" ; 
const allCharacter = upperCase + lowerCase + numbers + symboles ; 




function genrateRandom() {
let password = ('') ;

password += upperCase[Math.floor(Math.random() * upperCase.length)] ;
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += numbers[Math.floor(Math.random() * numbers.length)];
password += symboles[Math.floor(Math.random() * symboles.length)] ; 

while (length > password.length) {

    password += allCharacter [Math.floor(Math.random() * allCharacter.length)]
}
passwordBox.value = password ; 

}