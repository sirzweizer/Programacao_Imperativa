const inicia_preparo = require('./modulos/aquecimento');
const converte = require('./modulos/converte_ms');

function menu(tecla, timer, prato,){
    switch (tecla){
        case 1:
            prato = 'Pipoca';
            inicia_preparo(converte(timer), 10000, prato);
            break;
        case 2:
            prato = 'Macarrão';
            inicia_preparo(converte(timer), 8000, prato)
            break;
        case 3:
            prato = 'Carne';
            inicia_preparo(converte(timer), 15000, prato);
            break;
        case 4:
            prato = 'Feijão';
            inicia_preparo(converte(timer), 12000, prato);
            break;
        case 5:
            prato = 'Brigadeiro';
            inicia_preparo(converte(timer), 8000, prato)
            break;
        default:
            console.log('Prato inexistente!');
 
    }
}

menu(5,32);
