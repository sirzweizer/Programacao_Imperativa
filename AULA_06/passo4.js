let tamanhos = ['PP', 'P', 'M', 'G', 'GG'];

//crie um array, percorra, altere e exiba seus elementos
console.log("Percorrendo os elementos do array Tamnhos:")
for(let i=0;i<tamanhos.length;i++)
{
    console.log(tamanhos[i]);
}


console.log("Agora vou selecionar a posição dos elementos do maior tamanho:", tamanhos.indexOf('P'));
console.log("E maior tamanho:", tamanhos.indexOf('GG'));
console.log('Compare:',tamanhos);