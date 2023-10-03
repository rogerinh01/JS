import prompt from 'prompt-sync'
let ler = prompt();


console.log('Informe o total de eleitores');
let total = Number(ler());

console.log('Informe o número de votos válidos');
let validos = Number(ler());

console.log('Informe o número de votos brancos');
let brancos = Number(ler());

console.log('Informe o número de votos nulos');
let nulos = Number(ler());

let valid = (validos*100) / total;
let branco = (brancos*100) / total;
let nulo = (nulos*100) / total;

console.log(`O percentual de votos válidos é ${valid}`);
console.log(`O percentual de votos brancos é ${branco}`);
console.log(`O percentual de votos nulos é ${nulo}`);

 