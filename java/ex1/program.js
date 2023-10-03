import { nat } from './natural.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe um número limite:');
let n = Number(ler())

console.log('Iniciando a contagem:')
nat(n)

