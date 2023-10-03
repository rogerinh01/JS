import { febre } from './dodoi.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe sua temperatura para saber se está com febre:');
let temp = Number(ler());

let x = febre(temp)

console.log(`Está com febre? ${x}`)