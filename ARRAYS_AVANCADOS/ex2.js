// 2 - Crie um array de nomes, que possua dois indices com o nome Maria.
// Utilize o .filter() para obter apenas esses dois indices com o nome Maria.

const nomes = ['Joao', 'Maria', 'Pedro', 'Maria', 'Jose'];

const indices = nomes.filter(function(nome){
    return nome == 'Maria';
});

console.log(indices);