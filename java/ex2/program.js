import { reg } from './regressivo.js'
import prompt from 'prompt-sync'
let ler = prompt();

console.log('Me informe um número limite:');
let n = Number(ler())

console.log('Iniciando a contagem:')
reg(n)

