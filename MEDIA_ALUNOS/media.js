function Historico (nome, numArquivo, notas){
    this.nome = nome,
    this.numArquivo = numArquivo,
    this.notas = notas
}

let aluno1 = new Historico('PATRICK RODRIGUES', '001', [7.5,8.1,7.9])

console.log(aluno1)

function calculaMedia (n1, n2, n3){
    media = (n1+n2+n3)/3;
    if (media>=6){
        console.log('Aprovado!');
    }
    else{
        console.log('Reprovado!');
    }
}

calculaMedia(aluno1.notas[0], aluno1.notas[1], aluno1.notas[2]);
