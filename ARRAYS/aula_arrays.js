
let lista_supermercado = ['Sabão em pó', 'Detergente', 'Açúcar', 
'Leite', 'Ovos', 'Margarina', 'Carne de sol'];
console.log("Lista de Compras:",lista_supermercado);

//Não encontrei carne de sol, vou tirar da lista.
lista_supermercado.pop();
console.log("Não encontrei carne de sol, vou tirá-la! Lista de Compras:",lista_supermercado);

//Putz, lembre que preciso de papel higiênico!
lista_supermercado.push('Papel higiênico');
console.log("Adicionei Papel higiênico, vou verificar se gravou. Lista de Compras:",lista_supermercado);

//Peguei o sabão em pó, já posso riscar ele da lista :)
lista_supermercado.shift();
console.log("Já peguei o sabão em pó.");
console.log("O que mais falta? Lista de compras:",lista_supermercado);

//Como eu já estou na seção de produtos de limpeza, vou pegar o detergente tbm...
lista_supermercado.unshift();
console.log("Já que estou na seção de limpeza, vou pegar Detergente também. Riscado:");
let itens_faltantes = lista_supermercado.join("-")
console.log("O que falta agora? Vou pegar na sequência:",itens_faltantes);

