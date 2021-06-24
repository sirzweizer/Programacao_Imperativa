let filmes = ["star wars", "clube da luta",  "o poderoso chefão", "top gun",  "interestelar"];

//verificando se está tufo correto!!
console.log("verificando se está tufo correto:",filmes[1]);

let cartoons = ["toy story", "Procurando Nemo", "kung-fu panda", "wally", "fortnite"];
console.log ("Me disseram que Forntine não é Cartoon e sim jogo, entao...")
let cartoons_corrigidos = cartoons.pop();
function adiciona(){
    filmes.shift(cartoons_corrigidos);
    console.log(filmes);
}

adiciona();
