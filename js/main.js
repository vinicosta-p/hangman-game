import {SecretWord} from "./mod.js"

const sw = new SecretWord();

const $hiden = document.querySelector('#palavra_secreta');
$hiden.textContent = sw.secretString; 

const $textfield = document.querySelector('#campo_de_texto');
$textfield.addEventListener("keypress", function(e) {
    if (e.key === 'Enter' ) {

        let letra = new String($textfield.value);
        if(letra.match(/\s/g) == null && letra != ""){
            
            console.log($textfield.value);
        }
    
    }
});

