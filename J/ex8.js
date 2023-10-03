import prompt from 'prompt-sync'
let ler = prompt();

console.log('Calculadora de juros simples')

console.log('Informe o valor da Capital')
let capital = Number(ler());

console.log('Informe a Taxa');
let taxa = Number(ler());

console.log('Informe o tempo');
let tempo = Number(ler());

let juros = (capital * taxa * tempo) / 100;

let montante = capital + juros;

console.log(`O montante pago pelo empréstimo de R$${juros} é R$${montante}`)