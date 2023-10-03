import prompt from 'prompt-sync'
let ler = prompt();

console.log('===ESSE PROGRAMA INFORMA SE VOCÊ ESTA COM FEBRE===');

console.log('\n informe sua temperatura');
let temp = Number(ler());

let febre = temp >= 37.5;

console.log('você está com febre? ' + febre)