import { media } from './notas.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe a primeira nota:');
let n1 = Number(ler());

console.log('Me informe a segunda nota:');
let n2 = Number(ler());

console.log('Me informe a terceira nota:');
let n3 = Number(ler());

console.log('Me informe a quarta nota:');
let n4 = Number(ler());

console.log('Me informe a quinta nota:');
let n5 = Number(ler());

let x = media(n1, n2, n3, n4, n5)

console.log(`Sua média será ${x}`)