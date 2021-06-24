//crie um array de numeros primos
let numerosPrimos = [13,7,2,5,11,19,17];

//crie um outro array chamado numeros para conter os numeros do array numerosPrimos
//por meio de um spread
let numeros = [...numerosPrimos, 20,25,15,,22,32,44,37];


//crie uma função maiorNumero que receba N parâmetros
//e retorne o maior numero entre os numeros do array ao expandir os números do array
function maiorNumero(...paramns){
    console.log(Math.min(...numerosPrimos));
}

maiorNumero();
//2
