
let cidadesVisitar = ['Rio de Janeiro','São Paulo', 'Floarianopolis'];

//Acessando os elementos do array
console.log("Acessando os elementos do array:",cidadesVisitar)

//adicionando cidades no array
cidadesVisitar.push('Gramados','Buenos Aires');
console.log("Esqueci de adicionar(push) outras cidades:", cidadesVisitar);

console.log("Percebi que Buenos Aires não é no Brasil! Vou riscá-la! (pop)");
cidadesVisitar.pop();
console.log(cidadesVisitar)
