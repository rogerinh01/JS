import { media } from './calcular.js'
import { situacao } from './calcular.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe a primeira nota:');
let nota1 = Number(ler())

console.log('Me informe a segunda nota:');
let nota2 = Number(ler())

console.log('Me informe a terceira nota:');
let nota3 = Number(ler())

let x = media(nota1, nota2, nota3)

let z = situacao(x)

console.log(`Sua média é ${x} e sua situação é ${z}`)