import prompt from 'prompt-sync'
let ler = prompt();

console.log('Conversor de Fahrenheit para Celsius');

console.log('Me informe uma Temperatura em Fahrenheit:');
let f = Number(ler());

let c = (f-32) /9;
let resultado = c * 5;
console.log(`De ${f}°F Fahrenheit para Celsius irá ser ${resultado}°C`);