let nomes = ['maria', 'solange', 'indrig', 'pamela'];

console.log("Percorrendo a array Nomes:");
for(let i=0;i<nomes.length;i++)
{
    console.log(nomes[i]);
}


nomes=['pedro', 'paulo', 'estevão', 'antonio'];
console.log("Modificando... :", nomes.join())

function converteMaiusculo(nome){
    for (let i = 0; i < nome.length; i++)
    {
        nome[i] = nome[i].toUpperCase();
    }
    return nome.join();
}

console.log(converteMaiusculo(nomes));