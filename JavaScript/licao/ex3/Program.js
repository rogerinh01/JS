import { retangulo } from './retanguloArea.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe a altura do retangulo')
let h = Number(ler());

console.log('Me informe a base do retangulo:');
let b = Number(ler());

let x = retangulo(h, b);

console.log(`A area do retangulo será ${x}`);