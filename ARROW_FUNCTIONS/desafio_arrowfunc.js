//Micro desafio Arrow functions
//funções no estilo clássico conforme consta no slide:

            // function print (mensagem){
            //     console.log(mensagem)
            // }

            // print ("Olá, bom dia!")

            // function soma (n1, n2){
            //     return n1 + n2
            // }

            // console.log(soma(10,10))

//Funções do microdesafio transformadas em Arrow Functions
let print = mensagem => 'Olá, bom dia';
console.log(print());

let somaArrow = (n1, n2) => n1 + n2;
console.log(somaArrow(10,10));