/*let myHeading = document.querySelector('h1'); // looooool
myHeading.textContent = 'Bonjour, monde !';// deux barre si le commantaire et sur une seule ligne
 let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");    
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");  }  

let num1=2;
let num2=3;
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
multiply; 
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function() {}); {
    alert('Aïe, arrêtez de cliquer !!'); } */

    let image = document.querySelector('img');
    image.addEventListener('click',function gg()
    {
        let source= image.getAttribute('src')
        if(source === 'image/baleine.jpg') 
        { image.setAttribute('src', 'image/baleine1.jpg' ) }
        else{
            image.setAttribute('src','image/baleine.jpg')
        }
    })

    let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
}
if (!localStorage.getItem('nom')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('nom');
  myHeading.textContent = 'Mozilla est cool, ' + storedName;
}
myButton.addEventListener('click', function() {
  setUserName();
});