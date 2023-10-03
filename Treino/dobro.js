import prompt from 'prompt-sync';
let ler = prompt();


console.log('Olá, informe um número para eu calcular o dobro');
let numero = Number(ler());

let dobro = numero * 2;


console.log(`O dobro de ${numero} é ${dobro}`);
