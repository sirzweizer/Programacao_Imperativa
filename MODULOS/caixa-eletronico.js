//Notei que no Brasil, ao contrário do que ocorre nos Estados Unidos, 
//os valores são expressos com "," ao invés de "." para seperar os valores de moedas de cédulas 
const padraobr = require('./lib/moedabr');

function Conta (numConta, titular, saldo){
    this.numConta = numConta,
    this.nomeTitular = titular,
    this.saldo = saldo
}

function depositar (conta, saldo, qtd){
    saldo = saldo+=qtd
    console.log('Depósito realizado de R$',padraobr(qtd),
    'Seu saldo da conta',conta,'é de R$',padraobr(saldo));
}

function debitar (conta, saldo, qtd){
    if (qtd > saldo){
        console.log('O saldo da conta',conta,'é insuficiente para realizar esta operação');
    }
    else{
        saldo = saldo -= qtd;
        console.log('Saque realizado de R$ '+padraobr(qtd)+
        '. O saldo da conta',conta,'agora é de R$',padraobr(saldo));
    }    
}

let conta1 = new Conta (1,'PATRICK RODRIGUES',100.00);

console.log(conta1);
depositar(conta1.numConta, conta1.saldo, 300.00) //400
debitar(conta1.numConta, conta1.saldo, 89.35);   //10,65
