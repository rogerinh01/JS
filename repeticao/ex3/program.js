import { daora } from './inicioefim.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe um número inicial:');
let inicial = Number(ler());

console.log('Informe o número final:')
let final = Number(ler())

console.log('Iniciando a contagem:')
daora(inicial, final)

