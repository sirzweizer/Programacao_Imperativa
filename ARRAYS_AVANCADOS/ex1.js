// 1 - Crie um array d enumeros pares, e utiizando a função .map() nesse array,
// crie um novo array com apenas números impares

const numerosPares = [2,4,6,8,10,12,14];

let numerosImpares = numerosPares.map(function(num){
    return num + 1;
});

console.log(numerosImpares);
