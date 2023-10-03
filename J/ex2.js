import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe quantos Reais você quer converter para Dolar');
let real = Number(ler());
let dolar = real / 5.19;

console.log(`O valor em Dolares é ${dolar}`);