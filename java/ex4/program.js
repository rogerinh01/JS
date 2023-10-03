import { r } from './par.js'
import prompt from 'prompt-sync'
let ler = prompt()

console.log('Informe o número inicial:')
let ini = Number(ler())

console.log('Informe o numero final:')
let fin = Number(ler())

console.log('Iniciando contagem:');
r(ini, fin)