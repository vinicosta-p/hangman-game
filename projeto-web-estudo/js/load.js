function GeradorDePalavras() {
    const bancoDePalavras = ['Ave',  'Abelha', 'Milho', 'Macaco', 'Vaqueiro']; 
    let seed = Math.floor(Math.random() * bancoDePalavras.length);
    return bancoDePalavras[seed].toUpperCase();
};

function hideWord(word) {
    let secretChar = "";
    for(let i = 0; i < word.length; i++){
        secretChar +=  "_ ";
    }
    return secretChar;
}
const hiden = document.querySelector('#palavra_secreta');
const secret_word = GeradorDePalavras();
hiden.textContent = hideWord(secret_word); 

// Area de input

const textfield = document.querySelector('#campo_de_texto');
textfield.addEventListener("keypress", function(e) {
    if (e.key === 'Enter' && textfield.value == "") {
    console.log("campo vazio");
    }
});




// ------------------------------------------
function avaliadorDeEntrada(){
    

    if(letra_do_usuário);
}


