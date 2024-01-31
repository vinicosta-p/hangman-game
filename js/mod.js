const bancoDePalavras = ['Ave',  'Abelha', 'Milho', 'Macaco', 'Vaqueiro'];

function hideWord(word) {
    let secretChar = "";
    for(let i = 0; i < word.length; i++){
        secretChar +=  "_ ";
    }
    return secretChar;
}

export class SecretWord {
    constructor() {
        this.seed = Math.floor(Math.random() * bancoDePalavras.length);
        this.word = bancoDePalavras[this.seed];
        this.secretString = hideWord(this.word);
    }
}



