import prompt from 'prompt-sync'
let ler = prompt();

import { cor } from './cor.js'

console.log('informe a 1° cor');
let cor1 = ler();

console.log('informe a 2° cor');
let cor2 = ler();

let x = cor(cor1);
let z = cor(cor2);

console.log('a primeira cor é uma cor primaria? ' + x + ' a segunda cor é uma cor primaria? ' + z)
