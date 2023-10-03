import prompt from 'prompt-sync';
let ler = prompt();

console.log('Me informe os quilogramas');
let kg = Number(ler());
let gramas = kg * 1000

console.log(`O valor em gramas é ${gramas}`)
