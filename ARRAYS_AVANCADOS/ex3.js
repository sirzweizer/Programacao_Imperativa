
// 3 - Crie um array de numeros e utilize a função .reduce() para devolver
// uma string com os números formatados

const numeros = [12,36,25,49,52,59];

console.log(numeros.reduce((todos,el)=>todos+'-'+el));