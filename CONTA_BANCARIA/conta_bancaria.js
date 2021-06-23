
function Conta (numConta, titular, saldo){
    this.numConta = numConta,
    this.nomeTitular = titular,
    this.saldo = saldo
}


function depositar (conta, saldo, qtd){
    saldo = saldo+=qtd
    console.log('Depósito realizado de R$',qtd,'Seu saldo da conta',conta,'é de R$',saldo);
}

function debitar (conta, saldo, qtd){
    if (qtd > saldo){
        console.log('O saldo da conta',conta,'é insuficiente para realizar esta operação');
    }
    else{
        saldo = saldo -= qtd;
        console.log('Saque realizado de R$ '+qtd+'. O saldo da conta',conta,'agora é de R$',saldo);
    }    
}


let conta1 = new Conta (1,'PATRICK RODRIGUES',100.00);

console.log(conta1);
depositar(conta1.numConta, conta1.saldo, 300.00) //400
debitar(conta1.numConta, conta1.saldo, 99.00)   //1