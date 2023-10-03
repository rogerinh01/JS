import { ano } from './Meses.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe um número de 1 a 12 para descobrir o mês');
let numero = Number(ler())

let x = ano(numero)

console.log(x)