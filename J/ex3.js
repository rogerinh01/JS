import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe quantos Dolares Você quer converter para Reais:');
let dolar = Number(ler());
let real = dolar * 5.15;

console.log(`O valor em Dolares é ${real}`);

