
function Restaurante (nome, cardapio) {
    this.nome = nome,
    this.cardapio = cardapio,
    this.entrada = function () {
        return 'Seja Bem-Vindo(a) ao Restaurante '+this.nome+'. Os pratos de hoje são: '
        + this.cardapio.join(", ");
    }
}


let meuRestaurante = new Restaurante('Comida Caseira', 
['Bife à milanesa', 'Lasanha', 'Baião de 2', 'Frango à passarinho']);

console.log(meuRestaurante.entrada());