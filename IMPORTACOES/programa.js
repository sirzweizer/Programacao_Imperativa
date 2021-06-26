const sorteador = require('./lib/sorteador');

let saudacao = () => console.log('Gerando seus números da sorte...');

function sorteia (msg1){
    msg1();
    // setTimeout(msg2, 100);
    for (let i = 1; i<=6; i++){
        setTimeout(function (){
            console.log(sorteador.sorteio());
        }, 200 * i);
    }
}

sorteia(saudacao);

