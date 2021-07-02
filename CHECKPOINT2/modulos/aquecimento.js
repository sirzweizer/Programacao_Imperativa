
let terminado=()=> 'Prato pronto, bom apetite!';
let erro=()=> 'Kabumm! Seu prato quebrou!!!';

function aquecimento (timer, msg){
    setTimeout( function(){
        console.log(msg)
    }, timer)
}

function aquece_prato(timer, tempoPadrao, prato){
    let triplo = tempoPadrao * 3;

    if (timer >= triplo){
        console.log('Aquecendo '+prato+'...');
        aquecimento(timer, erro());
    }
    else if(timer > 0 && timer < tempoPadrao){
        console.log('Tempo insuficiente!');
    }
    else{
        console.log('Aquecendo '+prato+'...');
        aquecimento(timer, terminado());
    }
}

module.exports=aquece_prato;
